var apiService = require("../api/service");
const Joi = require("joi");

const controller = {
  listWithPagination: async (req, res, next) => {
    try {
      let info = req.body;

      const schema = Joi.object({
        next_id: Joi.number(),
        item_per_page: Joi.number(),
      });

      const value = await schema.validateAsync({
        next_id: info.next_id,
        item_per_page: info.item_per_page,
      });

      let responseDetails = {
        next_id: info.next_id,
        item_per_page: info.item_per_page,
        data: [],
      };

      let getResp;
      getResp = await apiService.apiService().getDataByPagination(value);

      if (getResp.flagCheck) {
        responseDetails["next_id"] =
          getResp.data[getResp.data.length - 1]["Id"] + 1;
        responseDetails["data"] = getResp.data;
        res.status(200).send({
          status: 200,
          message: "Success",
          data: responseDetails,
        });
      } else {
        res.status(404).send({
          status: 500,
          message: "No data found",
          data: responseDetails,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "error",
        data: error.message,
      });
    }
  },

  filterWithEmail: async (req, res) => {
    try {
      let info = req.body;

      const schema = Joi.object({
        email: Joi.string().email().required(),
        next_id: Joi.number(),
        item_per_page: Joi.number(),
      });

      const value = await schema.validateAsync({
        email: info.email,
        next_id: info.next_id,
        item_per_page: info.item_per_page,
      });

      let responseDetails = {
        email: info.email,
        next_id: info.next_id,
        item_per_page: info.item_per_page,
        data: [],
      };

      let getResp;
      getResp = await apiService.apiService().filterWithEmail(value);

      if (getResp.flagCheck) {
        responseDetails["next_id"] =
          getResp.data[getResp.data.length - 1]["Id"] + 1;
        responseDetails["data"] = getResp.data;
        res.status(200).send({
          status: 200,
          message: "Success",
          data: responseDetails,
        });
      } else {
        res.status(404).send({
          status: 500,
          message: "No data found",
          data: responseDetails,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "error",
        data: error.message,
      });
    }
  },

  filterWithComapny: async (req, res) => {
    try {
      let info = req.body;

      const schema = Joi.object({
        company_name: Joi.string().required(),
        next_id: Joi.number(),
        item_per_page: Joi.number(),
      });

      const value = await schema.validateAsync({
        company_name: info.company_name,
        next_id: info.next_id,
        item_per_page: info.item_per_page,
      });

      let responseDetails = {
        company_name: info.company_name,
        next_id: info.next_id,
        item_per_page: info.item_per_page,
        data: [],
      };

      let getResp;
      getResp = await apiService.apiService().filterWithComapny(value);

      if (getResp.flagCheck) {
        responseDetails["next_id"] =
          getResp.data[getResp.data.length - 1]["Id"] + 1;
        responseDetails["data"] = getResp.data;
        res.status(200).send({
          status: 200,
          message: "Success",
          data: responseDetails,
        });
      } else {
        res.status(404).send({
          status: 500,
          message: "No data found",
          data: responseDetails,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "error",
        data: error.message,
      });
    }
  },
};

module.exports = controller;
