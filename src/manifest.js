import config from "./config";

const manifest = {
  appId: "dummy-id",
  appRoles: [],
  availableToOtherTenants: false,
  displayName: "Amazon Web Services (AWS)",
  errorUrl: null,
  groupMembershipClaims: null,
  optionalClaims: null,
  acceptMappedClaims: null,
  homepage: "https://signin.aws.amazon.com/saml?metadata=aws|ISV9.1|primary|z",
  informationalUrls: {
    privacy: null,
    termsOfService: null
  },
  identifierUris: ["nothing", "to", "see", "here"],
  keyCredentials: [],
  knownClientApplications: [],
  logoutUrl: null,
  oauth2AllowImplicitFlow: false,
  oauth2AllowUrlPathMatching: false,
  oauth2Permissions: [
    {
      adminConsentDescription:
        "Allow the application to access Amazon Web Services (AWS) on behalf of the signed-in user.",
      adminConsentDisplayName: "Access Amazon Web Services (AWS)",
      id: "dummy-id",
      isEnabled: true,
      type: "User",
      userConsentDescription:
        "Allow the application to access Amazon Web Services (AWS) on your behalf.",
      userConsentDisplayName: "Access Amazon Web Services (AWS)",
      value: "user_impersonation"
    }
  ],
  oauth2RequirePostResponse: false,
  objectId: "dummy-id",
  parentalControlSettings: {
    countriesBlockedForMinors: [],
    legalAgeGroupRule: "Allow"
  },
  passwordCredentials: [],
  publicClient: false,
  replyUrls: ["https://signin.aws.amazon.com/saml"],
  requiredResourceAccess: [],
  samlMetadataUrl: null
};

const manifestJson = () => {
  const json = [];
  config.teams.forEach(team => {
    team.accounts.forEach(account => {
      config.roles.forEach(role => {
        const accountName =
          account.name !== undefined ? "-" + account.name : "";
        const displayName = `AWS-${config.departmentShortName}-${
          team.shortName
        }${accountName}-${role}`;
        json.push({
          allowedMemberTypes: ["User"],
          description: displayName,
          displayName: displayName,
          id: "fake-role-id",
          isEnabled: true,
          lang: null,
          origin: "Application",
          value: `arn:aws:iam::${account.id}:role/${role},arn:aws:iam::${
            account.id
          }:saml-provider/AzureAD`
        });
      });
    });
  });

  return {
    ...manifest,
    appRoles: json
  };
};

export default manifestJson;
