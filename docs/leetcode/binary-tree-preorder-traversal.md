---
title: 二叉树的前序遍历
date: 2021-06-12
sidebar: true
tags:
 - leetCode
categories: 
 - leetCode
---

:::tip

[binary-tree-preorder-traversal](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/) 

:::

<!-- more -->

> 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。


------

#### 示例1
![](./img/binary-tree-preorder-traversal/inorder_1.jpg '图片来源网络')
```bash
输入：root = [1,null,2,3]
输出：[1,2,3]
```

#### 示例2
```bash
输入：root = []
输出：[]
```
#### 示例3
```bash
输入：root = [1]
输出：[1]
```
#### 示例4
![](./img/binary-tree-preorder-traversal/inorder_5.jpg '图片来源网络')
```bash
输入：root = [1,2]
输出：[1,2]
```
#### 示例5
![](./img/binary-tree-preorder-traversal/inorder_4.jpg '图片来源网络')
```bash
输入：root = [1,null,2]
输出：[1,2]
```

:::tip 提示
- 树中节点数目在范围 [0, 100] 内
- -100 <= Node.val <= 100
:::


:::tip 简介
> 前序遍历首先访问根结点然后遍历左子树，最后遍历右子树。在遍历左、右子树时，仍然先访问根结点，然后遍历左子树，最后遍历右子树。

若二叉树为空则结束返回，否则：
1. 访问根结点。
2. 前序遍历左子树。
3. 前序遍历右子树 。
:::

### 思路

递归遍历

- 当前root节点不为空时，先将 root 节点的值加入
- 调用 preOrder(root.left) 来遍历 root 节点的左子树
- 调用preOrder(root.right)来遍历 root 节点的右子
- 当节点的值为空节点时结束

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
   
    const preOrder = function(root) {
        if (root == null) {
            return;
        }
        result.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }

    preOrder(root);
    return result;
};
```
迭代遍历
- 创建一个栈，先把root入栈
- 当栈不为空时，弹出栈顶元素 node，把node的值存在结果数组中，先把node的右节点放入栈中，再把左节点入栈
- 遍历直到栈为空时结束

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    let stack = [root];

    while(stack.length) {
        let node = stack.pop();
        if (node) {
            result.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }

    return result;
};
```