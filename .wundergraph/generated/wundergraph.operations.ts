// Code generated by wunderctl. DO NOT EDIT.

import type {
	BaseOperationConfiguration,
	ConfigureQuery,
	ConfigureSubscription,
	ConfigureMutation,
	CustomizeQuery,
	CustomizeMutation,
	CustomizeSubscription,
	WunderGraphOperationsConfig,
} from "@wundergraph/sdk";

export interface OperationsConfiguration {
	// defaultConfig is the base for all configurations
	// all configuration shared across queries, mutations and subscriptions can be done in the default config
	defaultConfig: BaseOperationConfiguration;

	// queries lets you define the base config for all Queries
	// the input config is the defaultConfig object
	queries: ConfigureQuery;

	mutations: ConfigureMutation;
	subscriptions: ConfigureSubscription;

	// custom allows you to override settings for each individual operation
	// the input config is the default config + the query/mutation/subscription extra config
	custom?: {
		Scripts?: CustomizeQuery;
		UsersGet?: CustomizeQuery;
		UsersSubscribe?: CustomizeSubscription;
		UsersUpdate?: CustomizeMutation;
	};
}

declare module "@wundergraph/sdk" {
	export function configureWunderGraphOperations<GeneratedOperationConfiguration extends OperationsConfiguration>(
		config: WunderGraphOperationsConfig<GeneratedOperationConfiguration>
	): WunderGraphOperationsConfig<GeneratedOperationConfiguration>["operations"];
}
