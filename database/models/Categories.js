module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";

    let cols = {
        category_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        }

    };
    let config = {
        tableName: "categories",
        timestamps: false
    };

    const Categories = sequelize.define(alias, cols, config);

    Categories.associate = function (models) {
        Categories.hasMany(models.SubCategories, {
            as: "SubCategories",
            foreignKey: "subcategory_id"
        })
    }

    return Categories
}
