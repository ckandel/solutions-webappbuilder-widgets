///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(['dojo/_base/declare', 'jimu/BaseWidget', './lib/GridOverlay'],
function(declare, BaseWidget, GridOverlay) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'grid-overlay',
    // this property is set by the framework when widget is loaded.
    // name: 'GridOverlay',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('GridOverlay::postCreate');
      gridOverlay = this;
      var config = this.config;
      this.gridOverlay = new GridOverlay({
        map:this.map,
        minIntervalSpacing: config.minIntervalSpacing,
        levelOfDetail: config.levelOfDetail,
        labelPlacement: config.labelPlacement,
        verticalLabels: config.verticalLabels,
        cornerLabelXOffset: config.cornerLabelXOffset,
        cornerLabelYOffset: config.cornerLabelYOffset,
        intervalLabelXOffset: config.intervalLabelXOffset,
        intervalLabelYOffset: config.intervalLabelYOffset,
        colors: config.colors,
        lineWidths: config.lineWidths,
        fontSizes: config.fontSizes,
        lineOpacity: config.lineOpacity,
        labelOpacity: config.labelOpacity,
        centerLabelOpacity: config.centerLabelOpacity,
        centerLabelScaleFactor: config.centerLabelScaleFactor,
        fontFamily: config.fontFamily,
        enabled: false
      });
    },

    destroy: function() {
      console.log('GridOverlay::destroy - removing grid from map');
      this.gridOverlay.disable();
      this.inherited(arguments);
    },

    startup: function() {
      this.inherited(arguments);
      console.log('GridOverlay::startup');
    },

    onOpen: function(){
      console.log('GridOverlay::onOpen');
      this.gridOverlay.enable();
    },

    onClose: function(){
      console.log('GridOverlay::onClose');
      this.gridOverlay.disable();
    },

    onMinimize: function(){
      console.log('GridOverlay::onMinimize');
    },

    onMaximize: function(){
      console.log('GridOverlay::onMaximize');
    },

    onSignIn: function(credential){
      console.log('GridOverlay::onSignIn', credential);
    },

    onSignOut: function(){
      console.log('GridOverlay::onSignOut');
    },

    onPositionChange: function(){
      console.log('GridOverlay::onPositionChange');
    },

    resize: function(){
      console.log('GridOverlay::resize');
    }

    //methods to communication between widgets:

  });

});
