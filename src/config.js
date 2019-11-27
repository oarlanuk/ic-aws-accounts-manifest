const config = {
  department: "InnovationCentre",
  departmentDescription: "Innovation Centre",
  departmentShortName: "IC",
  roles: ["Admin", "IaasContributor", "ReadOnly"],
  teams: [
    {
      name: "ProductServices",
      description: "Product Services",
      shortName: "PS",
      accounts: [
        {
          id: "000000001",
          name: "Shared"
        },
        {
          id: "000000002",
          name: "NonProd"
        },
        {
          id: "000000003",
          name: "Prod"
        }
      ]
    }
  ]
};

export default config;
