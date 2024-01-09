import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Remove duplicate code

const calculateDevExpectedSalary = (developer) => {
  return `${developer.name} has X amount`;
};
const getDevExperience = (developer) => {
  return `${developer.name} has Y years of experience`;
};
const getDevGithubLink = (developer) => {
  return `${developer.name} has github.com/dev_name`;
};

// Bad:
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = calculateDevExpectedSalary(developer);
    const experience = getDevExperience(developer);
    const githubLink = getDevGithubLink(developer);
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };

    logger.info(data);
  });
}

const calculateManagerExpectedSalary = (manager) => {
  return `${manager.name} has X amount`;
};
const getManagerExperience = (manager) => {
  return `${manager.name} has Y years of experience`;
};
const getManagerMBAProjects = (manager) => {
  return `${manager.name} are located in files.com/manager_name`;
};

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = calculateManagerExpectedSalary(manager);
    const experience = getManagerExperience(manager);
    const portfolio = getManagerMBAProjects(manager);
    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    logger.info(data);
  });
}

const devDb = [
  { name: "Sam Njenga" },
  { name: "Ivy Wanjiku" },
  { name: "Shee Janes" },
];
const managerDb = [
  { name: "Mark Johns" },
  { name: "Rachel Tigers" },
  { name: "James Hughes" },
];
showDeveloperList(devDb);
showManagerList(managerDb);

const calculateExpectedSalary = (employee) => {
  return `${employee.name} has X amount`;
};
const getExperience = (employee) => {
  return `${employee.name} has Y years of experience`;
};
const getMBAProjects = (employee) => {
  return `${employee.name} are located in files.com/employee_name`;
};
const getGithubLink = (employee) => {
  return `${employee.name} has github.com/employee_name`;
};

// Good:
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = calculateExpectedSalary(employee);
    const experience = getExperience(employee);

    const data = {
      expectedSalary,
      experience,
    };

    switch (employee.type) {
      case "manager":
        data.portfolio = getMBAProjects(employee);
        break;
      case "developer":
        data.githubLink = getGithubLink(employee);
        break;
    }

    logger.info(data);
  });
}

const employeeDb = [
  { name: "Natasha Evans", type: "developer" },
  { name: "Brian Kimberley", type: "manager" },
  { name: "Cynthia Jones", type: "developer" },
  { name: "Naftali Davids", type: "developer" },
];

showEmployeeList(employeeDb);
