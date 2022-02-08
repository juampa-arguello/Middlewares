function userEntry(req, res, next) {
        let userList = ["Ada","Greta", "Vim", "Tim"]
        let user = req.query.user
        if (userList.find(e => e === user)) {
            next()
        } else {
            res.send('No tienes los privilegios para ingresar')
        }
}

module.exports = userEntry;