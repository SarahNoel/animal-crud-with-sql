module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define('Animal', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    image: DataTypes.STRING,
    placed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });
  return Animal;
};
