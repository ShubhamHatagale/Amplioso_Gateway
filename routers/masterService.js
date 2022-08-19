var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
const isAuthorized = require("../controller/requestAuthenticator");
const streamify = require('stream-array');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

let BASE_URL = "http://localhost:9000/masters";
let api = apiAdapter(BASE_URL);

router.get(
  "/users",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/users/:userId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.post(
  "/users",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => {
      return res.send(err);
    });
  }
);
router.put(
  "/users/:userId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/users/resetpassword/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/users/:userId",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/company",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/company/:comId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/company",
  isAuthorized,
  // (req, res) => {
  //   api.post(req.path, req.body).then(resp => {
  //     return res.send(resp.data);
  //   }).catch(err => {
  //     res.send({ errors: err });
  //   });
  // }
  (req, res) => {
    proxy.web(req, res, {
      target: BASE_URL,
    }, function (e) { console.log("log is: " + e) })
  }
);
router.post(
  "/company/forgot-password",
  // isAuthorized,
  // (req, res) => {
  //   api.post(req.path, req.body).then(resp => {
  //     return res.send(resp.data);
  //   }).catch(err => {
  //     res.send({ errors: err });
  //   });
  // }
  (req, res) => {
    proxy.web(req, res, {
      target: BASE_URL,
    }, function (e) { console.log("log is: " + e) })
  }
);
router.put(
  "/company/:comId",
  isAuthorized,
  // (req, res) => {
  //   api.put(req.path, req.body).then(resp => {
  //     return res.send(resp.data);
  //   }).catch(err => console.log(err));
  // }
  (req, res) => {
    proxy.web(req, res, {
      target: BASE_URL,
    }, function (e) { console.log("log is: " + e) })
  }
);
router.delete(
  "/company/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/company/resetpassword/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/averageEmp",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/averageEmp/:averageEmpId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/averageEmp",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/averageEmp/:AverageId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/averageEmp/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/country",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/country/:countryId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/country",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/country/:countryId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/country/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/coupon",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  });
router.get(
  "/coupon/:couponId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/coupon",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/coupon/:couponId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/coupon/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/employee",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/employee/:empId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/employee",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/employee/:empId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/employee/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/feedback",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  });
router.get(
  "/feedback/:feedId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/feedback",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/feedback/:feedId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/feedback/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/package",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  });
router.get(
  "/package/:packId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/package",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/package/:packId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/package/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/question",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  });
router.get(
  "/question/:questionId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/question",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/question/:questionId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/question/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/role",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  });
router.get(
  "/role/:roleId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/role",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/role/:roleId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/role/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/sector",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  });

router.get(
  "/sector/:sectorId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.post(
  "/sector",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    })
      .catch(err => { return res.send(err) });
    ;
  }
);


router.put(
  "/sector/:sectorId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/sector/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/year_of_experience",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  });

router.get(
  "/year_of_experience/:YOEId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.post(
  "/year_of_experience",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    })
      .catch(err => { return res.send(err) });
    ;
  }
);


router.put(
  "/year_of_experience/:YOEId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/year_of_experience/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/company/all_users/:comId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/allmanagers",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);


router.get(
  "/company/managers/:comId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);


router.get(
  "/company/managers/id/:userId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/company/managers/",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      console.log(resp.data);
      return res.send(resp.data);
    })
      .catch(err => { return res.send(err) });
    ;
  }
);

router.put(
  "/company/managers/:userId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => {
      console.log(err);
      return res.send(err)
    });
  }
);
router.delete(
  "/company/managers/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.post(
  "/",
  isAuthorized, (req, res) => {
    api.post(req.path, req.body).then(resp => {
      res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.put(
  "/company/managers/resetpassword/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/company/general_managers",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    })
      .catch(err => { return res.send(err) });
    ;
  }
);
router.get(
  "/company/general_managers/:userId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/company/general_managers/:userId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/employeedetails/email/:EmailId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/employeedetails/manager/:managerId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/employeedetails/company/:ComId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/employeedetails/:id",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/employeedetails",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => {
      res.send({ errors: err });
    });
  }
);
router.put(
  "/employeedetails/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.put(
  "/employeedetails/manager_id/update/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.delete(
  "/employeedetails/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/collect_feedback/employee/:EmpId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/collect_feedback/company/:ComId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/collect_feedback/manager/:ManId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);


router.get(
  "/collect_feedback/:id",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/collect_feedback",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => {
      res.send({ errors: err });
    });
  }
);
router.put(
  "/collect_feedback/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.put(
  "/collect_feedback/update/end_date/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.delete(
  "/collect_feedback/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.put(
  "/collect_feedback/manager_id/update/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/year_of_experience",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/year_of_experience/:YOEId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/year_of_experience",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => {
      res.send({ errors: err });
    });
  }
);
router.put(
  "/year_of_experience/:YOEId",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/year_of_experience/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/question",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/question/:Q_id",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/question/company/:ComId",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/question",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => {
      res.send({ errors: err });
    });
  }
);
router.put(
  "/question/:Q_id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/question/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);

router.get(
  "/option",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.get(
  "/option/:Q_id",
  isAuthorized,
  (req, res) => {
    api.get(req.path).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.post(
  "/option",
  isAuthorized,
  (req, res) => {
    api.post(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => {
      res.send({ errors: err });
    });
  }
);
router.put(
  "/option/:id",
  isAuthorized,
  (req, res) => {
    api.put(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
router.delete(
  "/option/:id",
  isAuthorized,
  (req, res) => {
    api.delete(req.path, req.body).then(resp => {
      return res.send(resp.data);
    }).catch(err => console.log(err));
  }
);
module.exports = router;
