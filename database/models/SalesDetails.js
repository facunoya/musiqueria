module.exports = (sequelize, dataTypes) => {
    let alias = "SalesDetails";

    let cols = {
        salesdetail_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },

        salesheader_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        quantity: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }

    };
    let config = {
        tableName: "salesdetails",
        timestamps: false
    };

    const SalesDetails = sequelize.define(alias, cols, config);
    SalesDetails.associate = function (models) {
        SalesDetails.belongsTo(models.Products, {
            as: "Products",
            foreignKey: "product_id"
        })
        SalesDetails.belongsTo(models.SalesHeaders, {
            as: "SalesHeaders",
            foreignKey: "salesheader_id"
        })
    }


    return SalesDetails
}
