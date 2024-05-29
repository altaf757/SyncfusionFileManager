
ModalManager = (function () {

    var _normalizeOptions = function (options) {
        if (!options.modalId) {
            options.modalId = 'Modal_' + (Math.floor((Math.random() * 1000000))) + new Date().getTime();
        }

        if (options.modalSize === null) {
            options.modalSize = "";
        }
        else if (options.modalSize) {
            options.modalSize = options.modalSize;
        } else {
            options.modalSize = 'modal-lg';
        }
    };

    function _removeContainer(modalId) {
        var _containerId = modalId + 'Container';
        var _containerSelector = '#' + _containerId;

        var $container = $(_containerSelector);
        if ($container.length) {
            $container.remove();
        }
    }

    function getModalZIndex() {
        let modalBaseZIndex = 1050;
        let modalCount = $(".modal.fade.show").length;

        return modalBaseZIndex + modalCount * 2;
    }

    function setBackDropZIndex(modalSelector) {
        var zindex = parseInt($(modalSelector).css("z-index")) - 1;
        var modalBackdrops = $(".modal-backdrop.fade.show");
        $(modalBackdrops[modalBackdrops.length - 1]).css("z-index", zindex);
    }

    function _createContainer(modalId, modalSize) {
        _removeContainer(modalId);

        var _containerId = modalId + 'Container';
        return $('<div id="' + _containerId + '"></div>')
            .append(
                '<div id="' + modalId + '" class="modal fade fixed z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex e-lib e-draggable" tabindex="-1" role="modal" aria-hidden="true" style="z-index:' + getModalZIndex() + '">' +
                '  <div class="modal-dialog relative p-4 max-w-4xl h-full md:h-fit modal-dialog-scrollable ' + modalSize + '">' +
                '    <div class="modal-content modal-content relative bg-white rounded-lg shadow dark:bg-gray-700"></div>' +
                '  </div>' +
                '</div>'
            ).appendTo('body');
    }

    return function (options) {

        _normalizeOptions(options);

        var _options = options;
        var _$modal = null;
        var _modalId = options.modalId;
        var _modalSelector = '#' + _modalId;
        var _modalObject = null;
        var _modalSize = options.modalSize;

        var _publicApi = null;
        var _args = null;
        var _getResultCallback = null;
        var _onShownCallback = null;

        var _onCloseCallbacks = [];
        var _onBeforeCloseCallbacks = [];

        function _initAndShowModal() {
            _$modal = $(_modalSelector);

            _$modal.modal({
                backdrop: 'static'
            });

            _$modal.on('hidden.bs.modal', function () {
                for (var i = 0; i < _onBeforeCloseCallbacks.length; i++) {
                    _onBeforeCloseCallbacks[i]();
                }

                _removeContainer(_modalId);

                for (var i = 0; i < _onCloseCallbacks.length; i++) {
                    _onCloseCallbacks[i]();
                }

                if (typeof _options.removeAllOnCloseBindsAfterModalClose == "boolean" && _options.removeAllOnCloseBindsAfterModalClose) {
                    _onCloseCallbacks = [];
                    _onBeforeCloseCallbacks = [];
                }
            });

            _$modal.on('shown.bs.modal', function () {
                //_$modal.find('input.m-input:not([type=hidden]):first').focus();
                if (_onShownCallback) {
                    _onShownCallback(_$modal);
                }
            });

            _$modal.find('.modal-body').keydown(function (e) {
                if (e.which === 13) {
                    if (e.target.tagName.toLocaleLowerCase() === "textarea") {
                        e.stopPropagation();
                    } else {
                        e.preventDefault();
                    }

                }
            });

            _$modal.modal('show');

            setBackDropZIndex(_modalSelector);
        }

        var _open = function (args, getResultCallback, onShownCallback) {

            _args = args || {};
            _getResultCallback = getResultCallback;
            _onShownCallback = onShownCallback;
            //setBusy($("body"));

            _createContainer(_modalId, _modalSize)
                .find('.modal-content')
                .load(options.viewUrl, _args, function (response, status, xhr) {
                    if (status == "error") {
                        alert('Internal Server Error!');
                        return;
                    };
                    _initAndShowModal();

                    //clearBusy($("body"));
                });
        };

        var _close = function () {
            if (!_$modal) {
                return;
            }

            _$modal.modal('hide');
        };

        var _onClose = function (onCloseCallback) {
            _onCloseCallbacks.push(onCloseCallback);
        };

        var _onBeforeClose = function (onBeforeCloseCallback) {
            _onBeforeCloseCallbacks.push(onBeforeCloseCallback);
        };

        _publicApi = {
            open: _open,

            reopen: function () {
                _open(_args);
            },

            close: _close,

            getModalId: function () {
                return _modalId;
            },

            getModal: function () {
                return _$modal;
            },

            getArgs: function () {
                return _args;
            },

            getOptions: function () {
                return _options;
            },

            setResult: function () {
                _getResultCallback && _getResultCallback.apply(_publicApi, arguments);
            },

            onClose: _onClose,

            getModalObject: function () {
                return _modalObject
            },

            onBeforeClose: _onBeforeClose
        };

        return _publicApi;
    };
})();
