module.exports = {
  verbose: true,
  
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|style)$": "jest-transform-css"
  },

  setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each", "@testing-library/jest-dom/extend-expect"],

  moduleFileExtensions: ["tsx", "js", "ts"]
};
