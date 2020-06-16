/**
 * WordPress dependencies
 */
import { default as triggerApiFetch } from '@wordpress/api-fetch';
import { createRegistryControl } from '@wordpress/data';

/**
 * Trigger an API Fetch request.
 *
 * @param {Object} request API Fetch Request Object.
 * @return {Object} control descriptor.
 */
export function apiFetch( request ) {
	return {
		type: 'API_FETCH',
		request,
	};
}

export function getNavigationPost( menuId ) {
	return {
		type: 'SELECT',
		registryName: 'core/edit-navigation',
		selectorName: 'getNavigationPost',
		args: [ menuId ],
	};
}

/**
 * Calls a selector using the current state.
 *
 * @param {string} registryName
 * @param {string} selectorName
 * @param {Array} args         Selector arguments.
 * @return {Object} control descriptor.
 */
export function select( registryName, selectorName, ...args ) {
	return {
		type: 'SELECT',
		registryName,
		selectorName,
		args,
	};
}

/**
 * Dispatches a control action for triggering a registry select that has a
 * resolver.
 *
 * @param {string} registryName
 * @param {string} selectorName
 * @param {Array} args  Arguments for the select.
 * @return {Object} control descriptor.
 */
export function resolveSelect( registryName, selectorName, ...args ) {
	return {
		type: 'RESOLVE_SELECT',
		registryName,
		selectorName,
		args,
	};
}

export function dispatch( registryName, actionName, ...args ) {
	return {
		type: 'DISPATCH',
		registryName,
		actionName,
		args,
	};
}

const controls = {
	API_FETCH( { request } ) {
		return triggerApiFetch( request );
	},

	SELECT: createRegistryControl(
		( registry ) => ( { registryName, selectorName, args } ) => {
			return registry.select( registryName )[ selectorName ]( ...args );
		}
	),

	DISPATCH: createRegistryControl(
		( registry ) => ( { registryName, actionName, args } ) => {
			return registry.dispatch( registryName )[ actionName ]( ...args );
		}
	),

	RESOLVE_SELECT: createRegistryControl(
		( registry ) => ( { registryName, selectorName, args } ) => {
			return registry
				.__experimentalResolveSelect( registryName )
				[ selectorName ]( ...args );
		}
	),
};

export default controls;