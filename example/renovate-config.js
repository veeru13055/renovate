module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  forkProcessing: 'enabled',
  autodiscover: true,
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      minimumReleaseAge: '0 days',
    },
  ],
};
