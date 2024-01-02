import { Request, Response } from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import { eq } from 'drizzle-orm';

// Replace 'your-database', 'your-username', 'your-password' with your actual database credentials
const sequelize = new Sequelize('new', 'root', 'jaymatadi', {
    host: 'localhost',
    dialect: 'mysql',
});

// Define your counts model
const Count = sequelize.define('count', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
});

export async function POST(request: Request, response: Response) {
    try {
      // Find the count row with id equal to 1
      const countRow = await Count.findOne({
        where: {
          id: 1,
        },
      });
  
      // Check if the count row is found
      if (!countRow) {
        return response.status(404).json({ error: 'Count not found' });
      }
  
      // Update the count and save the changes
      await Count.update({
        count: (countRow.get('count') as number) + 1,
      }, {
        where: {
          id: 1,
        },
      });
  
      // Return a success message
      return response.json({
        message: 'Success',
      });
    } catch (error) {
      console.error(error);
      // Handle any errors and return an internal server error
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

// Sync the model with the database
sequelize.sync().then(() => {
    console.log('Database and table synced.');
});
