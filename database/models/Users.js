module.exports = (sequelize, dataTypes) => {
    let alias = "Users";

    let cols = {
        user_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

        avatar: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        profile: {
            type: dataTypes.STRING(255),
            allowNull: false

        }

    };
    let config = {
        tableName: "users",
        timestamps: false
    };

    const Users = sequelize.define(alias, cols, config);
    Users.associate = function (models) {
        Users.hasMany(models.Carts, {
            as: "Carts",
            foreignKey: "cart_id"
        })
        Users.hasMany(models.SalesHeaders, {
            as: "SalesHeaders",
            foreignKey: "salesheader_id"
        })

    }
    return Users
}
