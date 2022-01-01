const con = require("../../common/mysql");
const util = require("util");
const query = util.promisify(con.query).bind(con);

class Api {
  async getDataByPagination(info) {
    return new Promise(async (resolve, reject) => {
      // Query to fetch data as per pagination
      let select_query = `SELECT * FROM employee WHERE Id >= ${
        info.next_id ? info.next_id : 1
      } LIMIT ${info.item_per_page ? info.item_per_page : 10};`;

      let result = await query(select_query);
      if (result.length) {
        resolve({ flagCheck: true, data: result });
      } else {
        resolve({ flagCheck: false, data: [] });
      }
    });
  }

  async filterWithEmail(info) {
    return new Promise(async (resolve, reject) => {
      // Query to fetch data as per pagination
      let select_query = `SELECT * FROM employee WHERE Email = '${
        info.email
      }' and Id >= ${info.next_id ? info.next_id : 1}  ORDER BY Email LIMIT ${
        info.item_per_page ? info.item_per_page : 10
      };`;

      let result = await query(select_query);
      if (result.length) {
        resolve({ flagCheck: true, data: result });
      } else {
        resolve({ flagCheck: false, data: [] });
      }
    });
  }

  async filterWithComapny(info) {
    return new Promise(async (resolve, reject) => {
      // Query to fetch data as per pagination
      let select_query = `SELECT * FROM employee Where Company = '${
        info.company_name
      }' and Id >= ${info.next_id ? info.next_id : 1}  ORDER BY Company LIMIT ${
        info.item_per_page ? info.item_per_page : 10
      };`;

      let result = await query(select_query);
      if (result.length) {
        resolve({ flagCheck: true, data: result });
      } else {
        resolve({ flagCheck: false, data: [] });
      }
    });
  }
}

module.exports = {
  apiService: function () {
    return new Api();
  },
};
