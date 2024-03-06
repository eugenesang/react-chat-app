import {Sequelize, INTEGER, STRING} from 'sequelize'

const Account = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Additional fields can be added here, e.g., phone number, address, etc.
  });

  // Add relationships to other models (optional)
  // Example: User has many posts
  // User.hasMany(Post, { foreignKey: 'userId' });

  return User;
};

export default Account;
