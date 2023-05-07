module.exports = (sequelize, dataTypes) => {
    let alias = "SalesHeaders";

    let cols = {
        salesheader_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        dateSale: {
            type: dataTypes.DATE,
            allowNull: false
        },
        total: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }

    };
    let config = {
        tableName: "salesheaders",
        timestamps: false
    };

    const SalesHeaders = sequelize.define(alias, cols, config);

    SalesHeaders.associate = function (models) {
        SalesHeaders.hasMany(models.SalesDetails, {
            as: "SalesDetails",
            foreignKey: "salesdetail_id"
        })
        SalesHeaders.belongsTo(models.Users, {
            as: "Users",
            foreignKey: "user_id"
        })
    }


    return SalesHeaders
}
