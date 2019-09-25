"use strict";
exports.__esModule = true;
var linkedListNode_1 = require("./linkedListNode");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.append = function (value) {
            var newNode = new linkedListNode_1["default"](value);
            if (!_this.tail) {
                if (!_this.head) {
                    _this.head = newNode;
                }
                _this.tail = newNode;
                return _this.tail;
            }
            else {
                _this.tail.next = newNode;
                newNode.prev = _this.tail;
                _this.tail = newNode;
            }
            _this.length++;
            return _this.tail;
        };
        this.prepend = function (value) {
            var newNode = new linkedListNode_1["default"](value);
            if (!_this.head) {
                if (!_this.tail) {
                    _this.tail = newNode;
                }
                _this.head = newNode;
                _this.length++;
                return _this.head;
            }
            else {
                _this.head.prev = newNode;
                newNode.next = _this.head;
                _this.head = newNode;
            }
            _this.length++;
        };
        this.remove = function (value) {
            var currentNode = _this.head;
            while (currentNode.value !== value) {
                currentNode = currentNode.next;
            }
            if (!currentNode.next) {
                _this.tail = currentNode.prev;
                _this.tail.next = null;
                _this.length--;
                return _this.tail;
            }
            if (!currentNode.prev) {
                _this.head = currentNode.next;
                _this.head.prev = null;
                _this.length--;
                return _this.head;
            }
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
            _this.length--;
            return currentNode;
        };
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    return LinkedList;
}());
