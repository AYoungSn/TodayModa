module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-root-import',
      {rootPathPrefix: '~', rootPathSuffix: 'src'}
    ],
    'babel-plugin-styled-components',
    ['module-resolver', 
      {'root':['./src'],
      'extensions': ['.js', '.json','.ios.ts','.android.ts','.ts','.ios.tsx','.android.tsx','.tsx','.jsx'],
      'alias': { '~': './src'}
      }
    ]
  ]
};
