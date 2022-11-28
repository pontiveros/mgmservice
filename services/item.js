'use strict';

const fs = require('fs').promises;
const filePath = './sample_data.txt';

async function getItems() {
    try { 
        const data = await fs.readFile(filePath, 'utf-8');
        // console.log(data); here is working fine... 
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
    }
}

module.exports = {
  getItems
};