.. okchain-docs documentation master file, created by
   sphinx-quickstart on Tue Jan  7 11:23:39 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.


OKChain介绍文档
===============

OKChain是OKEx推出的一组开源跨链项目。OKChain秉承去中心化和开放原则，赋予每一个参与者应享有同等地位的权利，可以畅通无阻地发布和运行各种各样去中心化应用。

在全球去中心化基础设施建设的大潮中，我们也在努力尝试，OKChain就是基于此产生的。我们希望通过OKChain对去中心化技术的应用做出自己的贡献。

OKChain依托于OKEx的全域视野，从区块链底层切入，针对不同金融应用场景而进行优化的区块链基础设施解决方案。
我们推出的第一个区块链项目是去DeFi最重要的基础设施--现货交易的DEX。现在基于OKChain，人人都可以发布自己的DEX。


DEX
------

OKChain是DEX的基础设施，提供了\ `链上数据资产钱包管理 <features/account.html>`__，\ `数字资产和数字资产之间的交易对的发行 <getting-start/ico.html>`__，以及\ `撮合引擎 <trade/periodic_auction.html>`__等相关功能。DEX运营方可以将精力专注于交易UI和数字资产交易对的甄选而无需关心底层细节。我们也会通过社区推出一些通用的交易UI，帮助用户更快的建立自己的DEX。



你可能想要了解。。。
--------

-  \ `快速安装 <getting-start/install.html>`__
-  \ `链上治理 <concepts/gov.html>`__
-  \ `API接口 <api/http.html>`__
-  \ `费率模型 <fee.html>`__



目录
========

.. toctree::
   :maxdepth: 3
   :caption: 快速开始

   getting-start/introduction

.. _user-docs:

.. toctree::
   :maxdepth: 3
   :caption: 用户

   getting-start/install
   getting-start/join_testnet
   getting-start/command_line

.. _merchant-docs:

.. toctree::
   :maxdepth: 3
   :caption: 商户

   getting-start/ico

.. _concept-docs:

.. toctree::
   :maxdepth: 3
   :caption: 概念

   concepts/general-concepts
   concepts/sentry-nodes
   getting-start/genesis
   fee.md
   concepts/gov
   trade/periodic_auction
   concepts/upgrade-concept

.. _func-docs:

.. toctree::
   :maxdepth: 3
   :caption: 功能模块

   features/account
   features/asset
   features/order
   features/backend
   governance/overview
   features/upgrade-overview

.. _cmdClient-docs:

.. toctree::
   :maxdepth: 3
   :caption: 命令行客户端

   getting-start/command/account
   getting-start/command/token
   getting-start/command/send
   getting-start/command/order
   getting-start/command/backend
   getting-start/command/gov

.. _api-docs:

.. toctree::
   :maxdepth: 3
   :caption: API服务

   api/http
   api/node_rpc
   api/sdk
   api/msg

.. _tool-docs:

.. toctree::
   :maxdepth: 3
   :caption: 工具

   tools/monitor
   tools/command

.. _faq-docs:

.. toctree::
   :maxdepth: 1
   :caption: 常见问题

   faq.md
