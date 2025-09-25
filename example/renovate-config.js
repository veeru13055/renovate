module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  forkProcessing: 'enabled',
  autodiscover: true,
  requireConfig: false,
  regexManagers: [
    {
      fileMatch: ['.*\\.ya?ml$'],
      matchStrings: [
        'image:\\s*(?<depName>[\\w./-]+):(?<currentValue>[\\w.-]+)'
      ],
      datasourceTemplate: 'docker'
    }
  ],
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
