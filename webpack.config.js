module.exports = {
  mode: "development",
  entry: './code/main.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.png$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff | woff2)$/i,
        type: "asset/resource"
      }
    ]
  }
}