const TaskModel = require('../model/TaskModel');
const current = new Date();
const { eachDayOfInterval,startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } = require('date-fns');

class TaskController {

    async create (req, res){
        const task =  new TaskModel(req.body);
        await task.save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async update (req, res) {
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async all (req, res) {
        await TaskModel.find({ userid: {'$in': req.params.userid}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({error: 'Item não encontrado!'});
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async countDone(req,res) {
        var results = []
        var tipos=["total","padrao","esportes","alimentacao","trabalho","social","estudos","shopping","viagens","academia"];
        for (var i=0;i<=9;i++){
            if(i==0){
            await TaskModel.countDocuments({
                userid: {'$in': req.params.userid},
                done: true,
                }).then(response => {
                    results[tipos[i]]=response;
                })
        } else {
            await TaskModel.countDocuments({
                userid: {'$in': req.params.userid},
                done: true,
                type: i}).then(response => {
                    results[tipos[i]]=response;
                })
            }
        }
        var arrayToString = JSON.stringify(Object.assign({}, results));  // convert array to string
        var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
        return res.status(200).json(stringToJsonObject);
    }

    async countUndone(req,res) {
        var results = []
        var tipos=["total","padrao","esportes","alimentacao","trabalho","social","estudos","shopping","viagens","academia"];
        for (var i=0;i<=9;i++){
        if(i==0){
            await TaskModel.countDocuments({
                userid: {'$in': req.params.userid},
                done: false,
                type: i}).then(response => {
                    results[tipos[i]]=response;
                })
        }else {
            await TaskModel.countDocuments({
                userid: {'$in': req.params.userid},
                done: false,
                }).then(response => {
                    results[tipos[i]]=response;
            })
            }
        }

        var arrayToString = JSON.stringify(Object.assign({}, results));  // convert array to string
        var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object

        return res.status(200).json(stringToJsonObject);
    }

    async countByType(req,res) {
       await TaskModel.countDocuments({
            userid: {'$in': req.params.userid},
            when: {'$gte': startOfWeek(current), '$lte': endOfWeek(current)},
            type: req.params.type
        }).then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({error: 'Item não encontrado!'});
        }).catch(error => {
            return res.status(500).json(error);
        });
    }

    async countByTypeAndWeek(req,res) {
        var results = []
        const week = eachDayOfInterval({
            start: startOfWeek(current),
            end: endOfWeek(current)
        });
        for(var i=0;i<=6;i++){
            await TaskModel.countDocuments({
                userid: {'$in': req.params.userid},
                when: {'$gte': startOfDay(week[i]), '$lte': endOfDay(week[i])},
                type: req.params.type
            }).then(response => {
                var temp = '{"day": "'+week[i].toDateString()+'",'
                + '"count": "'+response+'"}'
                results[i]=JSON.parse(temp);  
            })
        }
        var arrayToString = JSON.stringify(Object.assign({}, results));  // convert array to string
        var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
        return res.status(200).json(stringToJsonObject);
    }

    async delete(req, res) {
        await TaskModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
 
    }

    async done(req, res) {
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'done': req.params.done},
            {new: true})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async late(req,res) {
        await TaskModel.find({
            'when': {'$lt': current},
            'userid': {'$in': req.params.userid},
            'done': false
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async today(req, res) {
        await TaskModel
        .find({
            'userid': {'$in': req.params.userid},
            'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async week(req, res) {
        await TaskModel
        .find({
            'userid': {'$in': req.params.userid},
            'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async month(req, res) {
        await TaskModel
        .find({
            'userid': {'$in': req.params.userid},
            'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async year(req, res) {
        await TaskModel
        .find({
            'userid': {'$in': req.params.userid},
            'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
}

module.exports = new TaskController();