module.exports = (sequelize, dataTypes) => {
    let alias = "SubCategories";

    let cols = {
        subcategory_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }

    };
    let config = {
        tableName: "subcategories",
        timestamps: false
    };

    const SubCategories = sequelize.define(alias, cols, config);

    SubCategories.associate = function (models) {
        SubCategories.belongsTo(models.Categories, {
            as: "Categories",
            foreignKey: "category_id"
        })
        SubCategories.hasMany(models.Products, {
            as: "Products",
            foreignKey: "product_id"
        })
    }

    return SubCategories
}
