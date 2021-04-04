const UserModel = require('../model/UserModel');

class TaskController {

    async create (req, res){
        const user =  new UserModel(req.body);
        await user.save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async update (req, res) {
        await UserModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await UserModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({error: 'Usuário não encontrado!'});
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async delete(req, res) {
        await UserModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
 
    }
}

module.exports = new TaskController();