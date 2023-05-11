module.exports = (sequelize, dataTypes) => {
    let alias = "Products";

    let cols = {
        product_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        subcategory_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        stock: {
            type: dataTypes.BIGINT(20),
            allowNull: false
        },

        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        colors: {
            type: dataTypes.STRING(255),
            allowNull: false

        },
        price: {
            type: dataTypes.DECIMAL(10, 0),
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(255),
            allowNull: false

        },
        productImg: {
            type: dataTypes.STRING(255),
            allowNull: false

        },
        createdDate: {
            type: dataTypes.DATE,
            // allowNull: false

        },

    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Products = sequelize.define(alias, cols, config);
    Products.associate = function (models) {
        Products.belongsTo(models.SubCategories, {
            as: "SubCategories",
            foreignKey: "subcategory_id"
        })
        Products.hasMany(models.Carts, {
            as: "Carts",
            foreignKey: "cart_id"
        })
        Products.hasMany(models.SalesDetails, {
            as: "SalesDetails",
            foreignKey: "salesdetail_id"
        })
    }


    return Products
}
