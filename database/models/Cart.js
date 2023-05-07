module.exports = (sequelize, dataTypes) => {
    let alias = "Carts";

    let cols = {
        cart_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        quantity: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }

    };
    let config = {
        tableName: "carts",
        timestamps: false
    };

    const Carts = sequelize.define(alias, cols, config);

    Carts.associate = function (models) {
        Carts.belongsTo(models.Products, {
            as: "Products",
            foreignKey: "product_id"
        })
        Carts.belongsTo(models.Users, {
            as: "Users",
            foreignKey: "user_id"
        })
    }


    return Carts
}
