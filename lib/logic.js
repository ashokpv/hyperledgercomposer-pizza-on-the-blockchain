/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.acme.biznet.ChangeStateToProduction} ChangeStateToProduction
 * @transaction
 */
async function ChangeStateToProduction(tx) {
    // Save the old value of the asset.
    tx.pizza.state = "production";
    return getAssetRegistry('org.acme.biznet.Pizza').then(function(assetRegistry){
        return assetRegistry.update(tx.pizza);
    }) ;

}


/**
 * Sample transaction
 * @param {org.acme.biznet.ChangeStateToFreezing} ChangeStateToFreezing
 * @transaction
 */
async function ChangeStateToFreezing(tx) {
    // Save the old value of the asset.
    tx.pizza.state = "freezing";
    return getAssetRegistry('org.acme.biznet.Pizza').then(function(assetRegistry){
        return assetRegistry.update(tx.pizza);
    }) ;

}


/**
 * Sample transaction
 * @param {org.acme.biznet.ChangeStateToPackaging} ChangeStateToPackaging
 * @transaction
 */
async function ChangeStateToPackaging(tx) {
    // Save the old value of the asset.
    tx.pizza.state = "Packaging";
    return getAssetRegistry('org.acme.biznet.Pizza').then(function(assetRegistry){
        return assetRegistry.update(tx.pizza);
    }) ;

}


/**
 * Sample transaction
 * @param {org.acme.biznet.ChangeStateToDistribution} ChangeStateToDistribution
 * @transaction
 */
async function ChangeStateToDistribution(tx) {
    // Save the old value of the asset.
    tx.pizza.state = "Distribution";
    return getAssetRegistry('org.acme.biznet.Pizza').then(function(assetRegistry){
        return assetRegistry.update(tx.pizza);
    }) ;

}



/**
 * Sample transaction
 * @param {org.acme.biznet.ChangeOwner} ChangeOwner
 * @transaction
 */
async function ChangeOwner(tx) {
    // Save the old value of the asset.
    tx.pizza.owner = tx.newOwner;
    return getAssetRegistry('org.acme.biznet.Pizza').then(function(assetRegistry){
        return assetRegistry.update(tx.pizza);
    }) ;

}



