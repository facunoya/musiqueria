getUsers: (req, res) => {
    let profile;
    if (req.session.userLogged != undefined) {

        profile = req.session.userLogged.profile
    } else {
        profile = null
    }

    //ACA poner el perfil de usuario para el boton editar
    db.Users.findAll()
        .then((usuarios) => {
            return res.status(200).send({
                "message": {
                    "usuarios": usuarios,
                    "perfil": profile
                }
            })
        })
        .catch((e) => { return res.status(404).send({ "message": "Error " + e }) })


}