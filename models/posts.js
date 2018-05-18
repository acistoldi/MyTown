module.exports = function(sequelize, DataTypes){
    var Posts = sequelize.define("Posts", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        websitelink: DataTypes.STRING,
        picturelink:DataTypes.STRING,        
        description: DataTypes.TEXT,
        kidfriendly:DataTypes.BOOLEAN,
        approved:{
           type: DataTypes.BOOLEAN ,
           defaultValue:0 
        }      
    });
    Posts.associate = function(models) {
       Posts.belongsTo(models.Users);
       Posts.belongsTo(models.Categories);
    }
   
      return Posts;
};