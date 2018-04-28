const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');
const PORT = 5432;

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed'),
      defaultValue: 'open'
    }
  });
  
  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          isEmail: true
      }
    }
  });
  
module.exports = { Page, User };

const init = async () => {
    await db.sync();

    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
};

init();

// module.exports = {
//   db
// };

