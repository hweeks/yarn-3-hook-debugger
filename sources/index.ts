import {
	Configuration,
	Descriptor,
	FetchOptions,
	FetchResult,
	Locator,
	MessageName,
	Package,
	PackageExtensionData,
	Plugin,
	Project,
	ResolveOptions,
	Resolver,
	Workspace,
	WrapNetworkRequestInfo,
} from "@yarnpkg/core";
import { InstallOptions } from "@yarnpkg/core/lib/Project";
import { Readable, Writable } from "stream";
import { PathLike } from "fs";

const plugin: Plugin = {
	hooks: {
		afterAllInstalled: (project: Project, options: InstallOptions) => {
			console.log("in: afterAllInstalled");
			return;
		},
		afterWorkspaceDependencyAddition: (
			workspace: Workspace,
			target: unknown,
			descriptor: Descriptor,
			strategies: unknown[],
		) => {
			console.log("in: afterWorkspaceDependencyAddition");
			return;
		},
		afterWorkspaceDependencyRemoval: (
			workspace: Workspace,
			target: unknown,
			descriptor: Descriptor,
		) => {
			console.log("in: afterWorkspaceDependencyRemoval");
			return;
		},
		afterWorkspaceDependencyReplacement: (
			workspace: Workspace,
			target: unknown,
			fromDescriptor: Descriptor,
			toDescriptor: Descriptor,
		) => {
			console.log("in: afterWorkspaceDependencyReplacement");
			return;
		},
		beforeWorkspacePacking: (workspace: Workspace, rawManifest: object) => {
			console.log("in: beforeWorkspacePacking");
			return;
		},
		cleanGlobalArtifacts: (configuration: Configuration) => {
			console.log("in: cleanGlobalArtifacts");
			return;
		},
		fetchHostedRepository: (
			current: FetchResult | null,
			locator: Locator,
			opts: FetchOptions,
		) => {
			console.log("in: fetchHostedRepository");
			return current;
		},
		fetchPackageInfo: (
			pkg: Package,
			extra: Set<string>,
			registerData: (
				namespace: string,
				data: Array<unknown> | { [key: string]: unknown | undefined },
			) => void,
		) => {
			console.log("in: fetchPackageInfo");
			return registerData;
		},
		getBuiltinPatch: (project: Project, name: string) => {
			console.log("in: getBuiltinPatch");
			return;
		},
		globalHashGeneration: (
			project: Project,
			contributeHash: (data: string | Buffer) => void,
		) => {
			console.log("in: globalHashGeneration");
			return;
		},
		populateYarnPaths: (
			project: Project,
			definePath: (path: string | null) => void,
		) => {
			console.log("in: populateYarnPaths");
			return;
		},
		reduceDependency: (
			dependency: Descriptor,
			project: Project,
			locator: Locator,
			initialDependency: Descriptor,
			extra: { resolver: Resolver; resolveOptions: ResolveOptions },
		) => {
			console.log("in: reduceDependency");
			return dependency;
		},
		registerPackageExtensions: (
			configuration: Configuration,
			registerPackageExtension: (
				descriptor: Descriptor,
				extensionData: PackageExtensionData,
			) => void,
		) => {
			console.log("in: registerPackageExtensions");
			return registerPackageExtension;
		},
		setupScriptEnvironment: (
			project: Project,
			env: Record<string, string>,
			makePathWrapper: (
				name: string,
				argv0: string,
				args: Array<string>,
			) => Promise<void>,
		) => {
			console.log("in: setupScriptEnvironment");
			return makePathWrapper;
		},
		validateProject: (
			project: Project,
			report: {
				reportWarning: (name: MessageName, text: string) => void;
				reportError: (name: MessageName, text: string) => void;
			},
		) => {
			console.log("in: validateProject");
			return;
		},
		validateWorkspace: (
			workspace: Workspace,
			report: {
				reportWarning: (name: MessageName, text: string) => void;
				reportError: (name: MessageName, text: string) => void;
			},
		) => {
			console.log("in: validateWorkspace");
			return;
		},
		wrapNetworkRequest: (
			executor: () => Promise<any>,
			extra: WrapNetworkRequestInfo,
		) => {
			console.log("in: wrapNetworkRequest");
			return executor;
		},
		wrapScriptExecution: (
			executor: () => Promise<number>,
			project: Project,
			locator: Locator,
			scriptName: string,
			extra: {
				script: string;
				args: Array<string>;
				cwd: PathLike;
				env: Record<string, string>;
				stdin: Readable | null;
				stdout: Writable;
				stderr: Writable;
			},
		) => {
			console.log("in: wrapScriptExecution");
			return executor;
		},
	},
};

export default plugin;
