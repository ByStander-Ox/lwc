/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

// Public APIs -------------------------------------------------------------------------------------
export { createContextProvider } from './context-provider';
export {
    BaseLightningElement as LightningElement,
    getCustomElementConstructor,
} from './base-lightning-element';
export { register } from './services';

export { default as api } from './decorators/api';
export { default as track } from './decorators/track';
export { default as wire } from './decorators/wire';
export { readonly } from './readonly';
export { unwrap } from './membrane';

export { deprecatedBuildCustomElementConstructor as buildCustomElementConstructor } from './wc';

export { setFeatureFlag, setFeatureFlagForTest } from '@lwc/features';

// Internal APIs used by renderers -----------------------------------------------------------------
export { getComponentInternalDef, setElementProto } from './def';
export {
    createVM,
    connectRootElement,
    disconnectedRootElement,
    getAssociatedVMIfPresent,
} from './vm';

// Internal APIs used by compiled code -------------------------------------------------------------
export { registerTemplate } from './secure-template';
export { registerComponent } from './component';
export { registerDecorators } from './decorators/register';

// Mics. internal APIs -----------------------------------------------------------------------------
export { sanitizeAttribute } from './secure-template';
export { getComponentDef, isComponentConstructor } from './def';

// Types -------------------------------------------------------------------------------------------
export type { Renderer } from './renderer';
