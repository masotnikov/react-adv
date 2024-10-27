import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash:8].js",
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options)
  }
}