module.exports = {
  'extends': ['react-tools', 'airbnb'],
  'rules': {
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'jsx-a11y/anchor-is-valid': [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
  }
}
