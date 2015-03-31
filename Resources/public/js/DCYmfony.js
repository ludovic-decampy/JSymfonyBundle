/* Copyright 2015 Ludovic Decampy <ludovic.decampy@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var DCYmfony = DCYmfony || {

        'collection': function () {

            var thys = new Object();

            thys.options = {
                'holder': null,
                'item_identifier': '.collectionItem',
                'prototype': '',
                'prototype_name': '__name__',
                'prototype_iterator': 0,
                'handlers': {
                    'add': function (holder, newForm) {
                        holder.append(newForm);
                    },
                    'delete': function () {

                    }
                }
            };

            thys.init = function (options) {
                thys.configure(options);
                thys.initPrototype();
                return thys;
            };

            thys.configure = function (options) {
                if (typeof(options) !== 'undefined')
                    $.extend(thys.options, options);
                return thys;
            };

            thys.initPrototype = function () {
                // Initialize iterator
                thys.options.prototype_iterator = thys.options.holder.find(thys.options.item_identifier).length;
                // Setting all prototype property that could have been defined with data-attributes
                $.each(['prototype', 'prototype_name', 'prototype_iterator'], function (index, data) {
                    if (typeof(thys.options.holder.data(data)) !== 'undefined') {
                        thys.options[data] = thys.options.holder.data(data);
                    }
                });
                return thys;
            };

            thys.addItem = function () {
                var prototype_name_regex = new RegExp(thys.options.prototype_name, 'g');
                var newForm = thys.options.prototype.replace(prototype_name_regex, thys.options.prototype_iterator++);
                thys.options.handlers.add(thys.options.holder, newForm);
                return thys;
            };

            thys.delItem = function (element) {
                element.closest(thys.options.item_identifier).remove();
                return thys;
            };

            return thys;
        }
    };