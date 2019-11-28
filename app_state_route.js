	'use strict';

	app.config(['$stateProvider',
	    '$urlRouterProvider',
	    '$ocLazyLoadProvider',
	    '$httpProvider',
	    '$locationProvider',
	    "$datepickerProvider",
	    "$routeProvider",
	    "$logProvider",
	    '$tooltipProvider',
	    function($stateProvider, $urlRouterProvider,
	        $ocLazyLoadProvider, $httpProvider, $locationProvider,
	        $datepickerProvider, $routeProvider, $logProvider, $tooltipProvider) {
	        $logProvider.debugEnabled(true);

	        angular.extend($tooltipProvider.defaults, {
	            animation: 'am-flip-x',
	            placement: 'auto',
	            trigger: 'hover',
	            container: 'body'
	        });

	        $httpProvider.interceptors.push('httpInterceptor');
	        $httpProvider.defaults.withCredentials = true;

	        $ocLazyLoadProvider.config({
	            debug: false,
	            events: true
	        });

	        $urlRouterProvider.otherwise('/login');
	        /******************** 
	        List of files from states route minified start 
	        -login
	        -layout
	        -layout.dashboard
	        -layout.salesEnquiry
	        -layout.viewSalesEnquiry
	        -layout.addSalesEnquiry
	        -layout.editSalesEnquiry
	        -layout.salesQuotation
	        -layout.salesQuotationCreate
	        -layout.salesQuotationAdd
	        -layout.salesQuotationEdit
	        -layout.salesQuotationView
	        -layout.crmShipment

	        List of files from stetes route minified end ******************************/


	        $stateProvider
	            .state('login', {
	                templateUrl: 'app/components/login/login.html',
	                url: '/login',
	                controller: 'mainCtrl'
	            })

	            .state('layout', {
	                templateUrl: 'mainLayout.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/division/division_factory.js',
	                                    'app/components/master/country/countryMasterFactory.js',
	                                    'app/common_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.dashboard', {
	                controller: 'dashboardCtrl',
	                templateUrl: 'app/components/dashboard/dashboard.html',
	                url: '/dashboard'
	            })

	            .state('layout.salesEnquiry', {
	                url: '/sales/enquiry/?submitAction&refCount',
	                params: {
	                    action: "SEARCH",
	                    module: "Enquiry",
	                    refCount: {
	                        value: "0",
	                        squash: false
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'EnquiryController',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                templateUrl: 'app/components/sales/enquiry/enquiry.html'
	            })
	            .state('layout.viewSalesEnquiry', {
	                url: '/sales/enquiry/view/:enquiryId/?searchFlag&submitAction&enqIdx&searchCustomerName&searchEnquiryNo&searchEnquiryDetailId&searchQuoteByStartDate&searchQuoteByEndDate&searchReceivedOnStartDate&searchReceivedOnEndDate&searchQuotationNo&searchSalesCoOrdinatorName&searchSalesmanName&searchLoggedOnStartDate&searchLoggedOnEndDate&searchLoggedByName&searchStatus&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&enquiryNo&fromQuoId&enquiryDetailId&refCount&nav_src_bkref_key&bkState&bkParam&bkTab&serviceName',
	                params: {
	                    action: "VIEW",
	                    module: "Enquiry",
	                    enquiryId: null,
	                    refCount: {
	                        value: "0",
	                        squash: false
	                    },
	                    searchFlag: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    enqIdx: {
	                        value: null,
	                        squash: true
	                    },
	                    enquiryNo: {
	                        value: null,
	                        squash: true
	                    },
	                    enquiryDetailId: {
	                        value: null,
	                        squash: true
	                    },
	                    fromQuoId: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCustomerName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchEnquiryNo: {
	                        value: null,
	                        squash: true
	                    },
	                    searchQuoteByStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchQuoteByEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchReceivedOnStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchReceivedOnEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchQuotationNo: {
	                        value: null,
	                        squash: true
	                    },
	                    searchSalesCoOrdinatorName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchSalesmanName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchLoggedOnStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchLoggedOnEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchLoggedByName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchStatus: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    bkState: {
	                        value: null,
	                        squash: true
	                    },
	                    bkParam: {
	                        value: null,
	                        squash: true
	                    },
	                    showActionButton: {
	                        value: null,
	                        squash: true
	                    },
	                    bkTab: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceName: {
	                    	value: null,
		                    squash: true
	                    }

	                },
	                controller: 'EnquiryController',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                templateUrl: 'app/components/sales/enquiry/view/enquiry_detail.html'
	            })
	            .state('layout.addSalesEnquiry', {
	                url: '/sales/enquiry/add/?fromHistory&forObj&bkState&bkParam&submitAction',
	                params: {
	                    action: "ADD",
	                    module: "Enquiry",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    bkState: {
	                        value: null,
	                        squash: true
	                    },
	                    bkParam: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                controller: 'EditEnquiryController',
	                templateUrl: 'app/components/sales/enquiry/edit_enquiry_page.html'
	            })
	            /*.state('layout.addSalesEnquiryDesign1', {
							url : '/sales/enquiry/design1/?fromHistory&forObj&submitAction',
							params : {
								action : "ADD",
								module : "Enquiry",
								fromHistory : {value : null, squash : true},
								forObj : {value : null, squash : true},
								submitAction : {value : null, squash : true}
							},
							controller : 'enquiryEditCtrl',
							templateUrl : 'app/components/sales/enquiry/edit_enquiry_mani.html'
						})
						.state('layout.addSalesEnquiryDesign2', {
							url : '/sales/enquiry/design2/?fromHistory&forObj&submitAction',
							params : {
								action : "ADD",
								module : "Enquiry",
								fromHistory : {value : null, squash : true},
								forObj : {value : null, squash : true},
								submitAction : {value : null, squash : true}
							},
							resolve: {
								  loadMyFiles: function($ocLazyLoad) {
		                                return $ocLazyLoad
		                                    .load({
		                                        name: 'NewAge',
		                                        files: [
		                                            'app/components/master/value_added_services/valueAddedServicesFactory.js',
		                                        ]
		                                    })
		                            }
							},
							controller : 'EditEnquiryController',
							templateUrl : 'app/components/sales/enquiry/edit_enquiryShankar.html'
						})
						.state('layout.addSalesEnquiryDesign3', {
							url : '/sales/enquiry/design3/?fromHistory&forObj&submitAction',
							params : {
								action : "ADD",
								module : "Enquiry",
								fromHistory : {value : null, squash : true},
								forObj : {value : null, squash : true},
								submitAction : {value : null, squash : true}
							},
							controller : 'enquiryEditCtrl',
							templateUrl : 'app/components/sales/enquiry/edit_enquirySudhan.html'
						})*/
	            .state('layout.editSalesEnquiry', {
	                url: '/sales/enquiry/edit/:enquiryId/:enquiryDetailId/?fromHistory&forObj&submitAction',
	                params: {
	                    action: "EDIT",
	                    module: "Enquiry",
	                    enquiryId: null,
	                    enquiryDetailId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                controller: 'EditEnquiryController',
	                templateUrl: 'app/components/sales/enquiry/edit_enquiry_page.html'
	            })
	            .state('layout.salesQuotation', {
	                url: '/sales/quotation/?submitAction&status&refCount',
	                params: {
	                    action: "SEARCH",
	                    module: "Quotation",
	                    refCount: {
	                        value: "0",
	                        squash: false
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    status: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                templateUrl: 'app/components/sales/quotation/quotation.html'
	            })
	            .state('layout.salesQuotationCreate', {
	                url: '/sales/quotation/create/?fromHistory&forObj&submitAction&enquiryId',
	                params: {
	                    action: "CREATE",
	                    module: "Quotation",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    enquiryId: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'quotationEditCtrl',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                templateUrl: 'app/components/sales/quotation/quotation_edit.html'
	            })
	            .state('layout.salesQuotationAdd', {
	                url: '/sales/quotation/add/?fromHistory&forObj&bkState&bkParam&submitAction',
	                params: {
	                    action: "ADD",
	                    module: "Quotation",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    bkState: {
	                        value: null,
	                        squash: true
	                    },
	                    bkParam: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'quotationEditCtrl',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                templateUrl: 'app/components/sales/quotation/quotation_edit.html'
	            })
	            .state('layout.salesQuotationEdit', {
	                url: '/sales/quotation/edit/:quotationId/?fromHistory&forObj&submitAction',
	                params: {
	                    action: "EDIT",
	                    module: "Quotation",
	                    quotationId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'quotationEditCtrl',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                templateUrl: 'app/components/sales/quotation/quotation_edit.html'
	            })
	            .state('layout.salesQuotationView', {
	                url: '/sales/quotation/view/:quotationId?submitAction&nav_src_bkref_key&quotationNo&fromEnqId&enquiryDetailId&fromShipmentId&searchServiceName&searchCustomerName&searchQuotationNo&searchPortOrigin&searchPortDestination&searchValidFromStartDate&searchValidFromEndDate&searchValidToStartDate&searchValidToEndDate&searchShipper&searchSalesCordinator&searchSalesman&searchLoggedOnStartDate&searchLoggedOnEndDate&searchLoggedBy&transportMode&status&importExport&searchRefNo&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&bkState&bkParam&showActionButton&&bkTab&serviceName',
	                params: {
	                    action: "VIEW",
	                    module: "Quotation",
	                    quotationId: null,
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    quotationNo: {
	                        value: null,
	                        squash: true
	                    },
	                    bkState: {
	                        value: null,
	                        squash: true
	                    },
	                    bkParam: {
	                        value: null,
	                        squash: true
	                    },
	                    bkTab: {
	                        value: null,
	                        squash: true
	                    },
	                    fromEnqId: {
	                        value: null,
	                        squash: true
	                    },
	                    enquiryDetailId: {
	                        value: null,
	                        squash: true
	                    },
	                    fromShipmentId: {
	                        value: null,
	                        squash: true
	                    },
	                    searchServiceName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCustomerName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchQuotationNo: {
	                        value: null,
	                        squash: true
	                    },
	                    searchPortOrigin: {
	                        value: null,
	                        squash: true
	                    },
	                    searchPortDestination: {
	                        value: null,
	                        squash: true
	                    },
	                    searchValidFromStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchValidFromEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchValidToStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchValidToEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchShipper: {
	                        value: null,
	                        squash: true
	                    },
	                    searchSalesCordinator: {
	                        value: null,
	                        squash: true
	                    },
	                    searchSalesman: {
	                        value: null,
	                        squash: true
	                    },
	                    searchLoggedOnStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchLoggedOnEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchLoggedBy: {
	                        value: null,
	                        squash: true
	                    },
	                    transportMode: {
	                        value: null,
	                        squash: true
	                    },
	                    status: {
	                        value: null,
	                        squash: true
	                    },
	                    importExport: {
	                        value: null,
	                        squash: true
	                    },
	                    searchRefNo: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    showActionButton: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceName: {
	                    	value: null,
		                    squash: true
	                    }
	                },
	                controller: 'quotationCtrl',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                ]
	                            })
	                    }
	                },
	                templateUrl: '/app/components/sales/quotation/view/quotation_details.html'
	            })
	            .state('layout.crmShipment', {
	                url: '/crm/shipment/?submitAction&refCount',
	                params: {
	                    action: "SEARCH",
	                    module: "Shipment",
	                    refCount: {
	                        value: "0",
	                        squash: false
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'shipmentCtrl',
	                templateUrl: 'app/components/crm/shipment/shipment.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentValidationService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentCalculationService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentAccountsService.js',
	                                    'app/components/master/comment/commentMasterFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })



	            .state('layout.addNewShipment', {
	                url: '/crm/newshipment/add?submitAction&fromScreen&count&forCopyShipment&forPurpose&fromState&fromStateParams&nav_src_bkref_key&forObj&serIndx&docIndx&fromHistory&selectedTab',
	                params: {
	                    action: "ADD",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    fromScreen: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    forCopyShipment: {
	                        value: null,
	                        squash: true
	                    },
	                    forPurpose: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    serIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    docIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedTab: {
	                        value: null,
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'uiShipmentCtrl',
	                templateUrl: '/app/components/crm/new-shipment/ui-shipment-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/new-shipment/ui-shipmentController.js',
	                                    'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentValidationService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentCalculationService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentAccountsService.js',
	                                    'app/components/crm/purchase_order/purchase_order_factory.js',
	                                    'app/components/master/comment/commentMasterFactory.js',
	                                    'app/components/crm/new-shipment/sailing_schedule_factory.js',

	                                ]
	                            })
	                    }
	                }
	            }).state('layout.editNewShipment', {
	                url: '/crm/shipment/edit/:shipmentId/?fromHistory&submitAction&count&nav_src_bkref_key&forObj&serIndx&docIndx&fromState&fromStateParams&selectedTab',
	                params: {
	                    action: "EDIT",
	                    module: "Shipment",
	                    shipmentId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    serIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    docIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedTab: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'uiShipmentCtrl',
	                templateUrl: '/app/components/crm/new-shipment/ui-shipment-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/new-shipment/ui-shipmentController.js',
	                                    'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentValidationService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentCalculationService.js',
	                                    'app/components/crm/purchase_order/purchase_order_factory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentAccountsService.js',
	                                    'app/components/master/comment/commentMasterFactory.js',
	                                    'app/components/crm/new-shipment/sailing_schedule_factory.js',
	                                ]
	                            })
	                    }
	                }
	            })
	            /*
	            						.state('layout.crmShipment2', {
	            							url : '/crm/shipment2/?submitAction&refCount',
	            							params : {
	            								action : "SEARCH",
	            								module : "Shipment",
	            								refCount : {value : "0", squash : false},
	            								submitAction : {value : null, squash : true}
	            							},
	            							controller : 'shipmentCtrl2', 
	            							templateUrl : 'app/components/crm/shipment2/shipment.html',
	            							resolve: {
	            	                            loadMyFiles: function($ocLazyLoad) {
	            	                                return $ocLazyLoad
	            	                                    .load({
	            	                                        name: 'NewAge',
	            	                                        files: [
	            	                                            'app/components/crm/shipment2/shipment_ctrl.js'
	            	                                        ]
	            	                                    })
	            	                            }
	            	                        }
	            						}).state('layout.crmShipment3', {
	            							url : '/crm/shipment3/?submitAction&refCount',
	            							params : {
	            								action : "SEARCH",
	            								module : "Shipment",
	            								refCount : {value : "0", squash : false},
	            								submitAction : {value : null, squash : true}
	            							},
	            							controller : 'shipmentCtrl3', 
	            							templateUrl : 'app/components/crm/shipment3/shipment.html',
	            							resolve: {
	            	                            loadMyFiles: function($ocLazyLoad) {
	            	                                return $ocLazyLoad
	            	                                    .load({
	            	                                        name: 'NewAge',
	            	                                        files: [
	            	                                            'app/components/crm/shipment3/shipment_ctrl.js'
	            	                                        ]
	            	                                    })
	            	                            }
	            	                        }
	            						})*/
	            .state('layout.viewCrmShipment', {
	                url: '/crm/shipment/view/:shipmentId?importExport&selectedPageNumber&count&recordPerPage&totalRecord&sortByColumn&documentId&forHawb&orderByType&shipmentDateStartDate&shipmentDateEndDate&shipmentStatus&routedBy&routed&status&createdBy&tos&destination&origin&shipmentUid&partyName&fromState&fromStateParams&readCount&consolId&fromQuoId&serviceId&showActionButton',
	                params: {
	                    action: "VIEW",
	                    module: "Shipment",
	                    shipmentId: null,
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    importExport: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentDateStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentDateEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentStatus: {
	                        value: null,
	                        squash: true
	                    },
	                    routedBy: {
	                        value: null,
	                        squash: true
	                    },
	                    routed: {
	                        value: null,
	                        squash: true
	                    },
	                    status: {
	                        value: null,
	                        squash: true
	                    },
	                    createdBy: {
	                        value: null,
	                        squash: true
	                    },
	                    tos: {
	                        value: null,
	                        squash: true
	                    },
	                    destination: {
	                        value: null,
	                        squash: true
	                    },
	                    origin: {
	                        value: null,
	                        squash: true
	                    },
	                    consolId: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    documentId: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    forHawb: {
	                        value: null,
	                        squash: true
	                    },
	                    partyName: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    fromQuoId: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceId: {
	                        value: null,
	                        squash: true
	                    },
	                    readCount: {
	                        value: "0",
	                        squash: true
	                    },
	                    showActionButton: {
	                        value: "0",
	                        squash: true
	                    }
	                },
	                controller: 'shipmentCtrl',
	                templateUrl: 'app/components/crm/new-shipment/view_templates/ui-shipment-view.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentValidationService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentAccountsService.js',
	                                    'app/components/crm/purchase_order/purchase_order_factory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentCalculationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.crmImportToExport', {
	                url: '/crm/importtoexport',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'importToExportCtrl',
	                templateUrl: 'app/components/crm/import_to_export/import_to_export.html'
	                /*resolve: {
	                            loadMyFiles: function($ocLazyLoad) {
	                                return $ocLazyLoad
	                                    .load({
	                                        name: 'NewAge',
	                                        files: [
	                                            'app/components/crm/new-shipment/ui-shipmentDataService.js'
	                                        ]
	                                    })
	                            }
	                        }*/
	            })
	            .state('layout.crmImportToExportView', {
	                url: '/crm/importtoexport/view/:serviceId/?searchFlag&submitAction&enqIdx&location&shipmentUid&service&nominationNo&nominationDate&partyName&origin&destination&etd&eta&searchType&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord',
	                params: {
	                    action: "VIEW",
	                    serviceId: null,
	                    searchFlag: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    enqIdx: {
	                        value: null,
	                        squash: true
	                    },
	                    location: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    service: {
	                        value: null,
	                        squash: true
	                    },
	                    nominationNo: {
	                        value: null,
	                        squash: true
	                    },
	                    nominationDate: {
	                        value: null,
	                        squash: true
	                    },
	                    partyName: {
	                        value: null,
	                        squash: true
	                    },
	                    origin: {
	                        value: null,
	                        squash: true
	                    },
	                    destination: {
	                        value: null,
	                        squash: true
	                    },
	                    etd: {
	                        value: null,
	                        squash: true
	                    },
	                    eta: {
	                        value: null,
	                        squash: true
	                    },
	                    searchType: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'importToExportCtrl',
	                /*resolve: {
	                            loadMyFiles: function($ocLazyLoad) {
	                                return $ocLazyLoad
	                                    .load({
	                                        name: 'NewAge',
	                                        files: [
	                                            'app/components/crm/new-shipment/ui-shipmentDataService.js'
	                                        ]
	                                    })
	                            }
	                        },*/
	                templateUrl: 'app/components/crm/import_to_export/view/import_to_export_detail.html'
	            })

	            .state('layout.PurchaseOrder', {
	                url: '/crm/purchase_order?submitAction&sortByColumn&orderByType&status&buyerName&supplierName&poNo&origin&destination&transportMode&tos&poDateStartDate&poDateEndDate',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    buyerName: {
	                        value: null,
	                        squash: true
	                    },
	                    supplierName: {
	                        value: null,
	                        squash: true
	                    },
	                    poNo: {
	                        value: null,
	                        squash: true
	                    },
	                    origin: {
	                        value: null,
	                        squash: true
	                    },
	                    destination: {
	                        value: null,
	                        squash: true
	                    },
	                    transportMode: {
	                        value: null,
	                        squash: true
	                    },
	                    tos: {
	                        value: null,
	                        squash: true
	                    },
	                    status: {
	                        value: null,
	                        squash: true
	                    },
	                    poDateStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    poDateEndDate: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'PurchaseOrderCtrl',
	                templateUrl: 'app/components/crm/purchase_order/purchase_order.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/purchase_order/purchase_order_ctrl.js',
	                                    'app/components/crm/purchase_order/purchase_order_factory.js',
	                                    'app/components/master/buyer_consolidation_master/buyer_consolidation_master_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })



	            .state('layout.addPurchaseOrder', {
	                url: '/crm/purchase_order/add?fromHistory&submitAction&nav_src_bkref_key&forObj',
	                params: {
	                    action: "ADD",
	                    module: "PurchaseOrder",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'PurchaseOrderEditCtrl',
	                templateUrl: '/app/components/crm/purchase_order/purchase_order_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/purchase_order/purchase_order_operation.js',
	                                    'app/components/crm/purchase_order/purchase_order_factory.js',
	                                    'app/components/master/buyer_consolidation_master/buyer_consolidation_master_factory.js',
	                                    'app/components/crm/purchase_order/purchase_order_validation_service.js',
	                                    'app/components/crm/purchase_order/purchase_order_data_conversion_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editPurchaseOrder', {
	                url: '/crm/purchase_order/edit/:id?fromHistory&submitAction&nav_src_bkref_key&forObj&count',
	                params: {
	                    action: "EDIT",
	                    id: null,
	                    module: "PurchaseOrder",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'PurchaseOrderEditCtrl',
	                templateUrl: '/app/components/crm/purchase_order/purchase_order_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/purchase_order/purchase_order_operation.js',
	                                    'app/components/crm/purchase_order/purchase_order_factory.js',
	                                    'app/components/master/buyer_consolidation_master/buyer_consolidation_master_factory.js',
	                                    'app/components/crm/purchase_order/purchase_order_validation_service.js',
	                                    'app/components/crm/purchase_order/purchase_order_data_conversion_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.viewPurchaseOrder', {
	                url: '/crm/purchase_order/:id?submitAction&selectedPageNumber&count&recordPerPage&totalRecord&sortByColumn&orderByType&createdBy&fromState&fromStateParams&status&buyerName&supplierName&poNo&origin&destination&transportMode&tos&poDateStartDate&poDateEndDate&fromView',
	                params: {
	                    action: "VIEW",
	                    id: null,
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    status: {
	                        value: null,
	                        squash: true
	                    },
	                    buyerName: {
	                        value: null,
	                        squash: true
	                    },
	                    supplierName: {
	                        value: null,
	                        squash: true
	                    },
	                    poNo: {
	                        value: null,
	                        squash: true
	                    },
	                    origin: {
	                        value: null,
	                        squash: true
	                    },
	                    destination: {
	                        value: null,
	                        squash: true
	                    },
	                    transportMode: {
	                        value: null,
	                        squash: true
	                    },
	                    tos: {
	                        value: null,
	                        squash: true
	                    },
	                    poDateStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    poDateEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    fromView: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'PurchaseOrderCtrl',
	                templateUrl: '/app/components/crm/purchase_order/purchase_order_detail.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/purchase_order/purchase_order_ctrl.js',
	                                    'app/components/crm/purchase_order/purchase_order_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })



	            .state(
	                'layout.tabviewmani', {
	                    url: '/crm/tab-view-mani',
	                    params: {
	                        action: "EDIT"
	                    },
	                    controller: 'tabviewCtrl',
	                    templateUrl: 'app/components/crm/Shipment1/circle_tab_edit.html',
	                    resolve: {
	                        loadMyFiles: function($ocLazyLoad) {
	                            return $ocLazyLoad
	                                .load({
	                                    name: 'NewAge',
	                                    files: [
	                                        'app/components/crm/Shipment1/circle_tab_edit_ctrl.js',
	                                    ]
	                                })
	                        }
	                    }
	                })

	            .state(
	                'layout.pricingAir', {
	                    url: '/crm/pricing',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    controller: 'pricingCtrl',
	                    templateUrl: 'app/components/crm/pricing_air/pricing_air.html',
	                    resolve: {
	                        loadMyFiles: function($ocLazyLoad) {
	                            return $ocLazyLoad
	                                .load({
	                                    name: 'NewAge',
	                                    files: [
	                                        'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                        'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                        'app/components/crm/new-shipment/ui-shipmentValidationService.js',
	                                        'app/components/crm/new-shipment/ui-shipmentCalculationService.js',
	                                        'app/components/master/comment/commentMasterFactory.js'
	                                    ]
	                                })
	                        }
	                    }
	                })
	            .state(
	                'layout.pricingAirAdd', {
	                    url: '/crm/pricing/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'pricingEditCtrl',
	                    templateUrl: 'app/components/crm/pricing_air/pricing_air_edit.html'
	                })
	            .state(
	                'layout.pricingAirEdit', {
	                    url: '/crm/pricing/edit/:id/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        id: null,
	                        fromHistory: null
	                    },
	                    controller: 'pricingEditCtrl',
	                    templateUrl: 'app/components/crm/pricing_air/pricing_air_edit.html'

	                })
	            .state(
	                'layout.viewPricingAir', {
	                    url: '/crm/pricing/view/:id?submitAction&searchPortOrigin&searchPortDestination&searchTransitPort&selectedPageNumber&count&recordPerPage&totalRecord&sortByColumn&orderByType&refCount',
	                    params: {
	                        action: "VIEW",
	                        id: null,
	                        index: null,
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        },
	                        selectedPageNumber: {
	                            value: null,
	                            squash: true
	                        },
	                        recordPerPage: {
	                            value: null,
	                            squash: true
	                        },
	                        totalRecord: {
	                            value: null,
	                            squash: true
	                        },
	                        sortByColumn: {
	                            value: null,
	                            squash: true
	                        },
	                        orderByType: {
	                            value: null,
	                            squash: true
	                        },
	                        searchPortOrigin: {
	                            value: null,
	                            squash: true
	                        },
	                        searchPortDestination: {
	                            value: null,
	                            squash: true
	                        },
	                        searchTransitPort: {
	                            value: null,
	                            squash: true
	                        },
	                        refCount: {
	                            value: "0",
	                            squash: false
	                        }
	                    },
	                    controller: 'pricingCtrl',
	                    templateUrl: 'app/components/crm/pricing_air/views/pricing_air_detail.html',
	                    resolve: {
	                        loadMyFiles: function($ocLazyLoad) {
	                            return $ocLazyLoad
	                                .load({
	                                    name: 'NewAge',
	                                    files: [
	                                        'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                        'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                        'app/components/crm/new-shipment/ui-shipmentValidationService.js',
	                                        'app/components/crm/new-shipment/ui-shipmentCalculationService.js',
	                                        'app/components/master/comment/commentMasterFactory.js'
	                                    ]
	                                })
	                        }
	                    }
	                })
	            .state('layout.iataRatesAir', {
	                url: '/crm/iatarate?refCount&submitAction',
	                params: {
	                    action: "SEARCH",
	                    module: "Iata Rate",
	                    refCount: {
	                        value: "0",
	                        squash: false
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'iataCtrl',
	                templateUrl: '/app/components/crm/iata_rates_air/iata_rates_air.html'
	            })
	            .state('layout.iataRatesAirView', {
	                url: '/crm/iatarate/view/:iataRateId/?searchFlag&iataRateIdx&submitAction&searchStatus&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord',
	                params: {
	                    action: "VIEW",
	                    module: "Iata Rate",
	                    iataRateId: null,
	                    searchFlag: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    iataRateIdx: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCarrier: {
	                        value: null,
	                        squash: true
	                    },
	                    searchPol: {
	                        value: null,
	                        squash: true
	                    },
	                    searchValidFromDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchValidToDate: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'iataCtrl',
	                templateUrl: 'app/components/crm/iata_rates_air/views/iata_rates_air_detail.html'
	            })
	            .state('layout.iataRatesAirAdd', {
	                url: '/crm/iatarate/add/?fromHistory&forObj&submitAction',
	                params: {
	                    action: "ADD",
	                    module: "Iata Rate",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'iataEditCtrl',
	                templateUrl: '/app/components/crm/iata_rates_air/iata_rates_air_edit.html'
	            })
	            .state('layout.iataRatesAirEdit', {
	                url: '/crm/iatarate/edit/:iataRateId/?fromHistory&forObj&submitAction',
	                params: {
	                    action: "EDIT",
	                    module: "Iata Rate",
	                    iataRateId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'iataEditCtrl',
	                templateUrl: '/app/components/crm/iata_rates_air/iata_rates_air_edit.html'
	            })

	            .state('layout.aesList', {
	                url: '/crm/aes_list',
	                controller: 'aes_list_ctrl',
	                params: {
	                    action: "SEARCH"
	                },
	                templateUrl: '/app/components/crm/aes/aes_list.html'
	            })
	            .state('layout.jobledger', {
	                url: '/finance/jobledger?fromHistory&nav_src_bkref_key&forObj&fromState&fromStateParams&shipmentUid&consolUid&shipmentArr&serviceName',
	                params: {
	                    action: "VIEW",
	                    module: "Finance",
	                    forPurpose: "JobLedger",
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    consolUid: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceName: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentArr: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceUid: {
	                        value: null,
	                        squash: true
	                    },
	                    documentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'jobledgerController',
	                templateUrl: 'app/components/finance/jobledger/job_ledger.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/finance/jobledger/job_ledger.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            //Consol new screens
	            .state('layout.airNewConsol', {
	                url: '/air/consolNewScreen?refCount&submitAction',
	                params: {
	                    action: "SEARCH",
	                    module: "Consol",
	                    refCount: {
	                        value: "0",
	                        squash: false
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'console_shipmentCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/consol_shipments.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentAccountsService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentDataService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consolShipmentValidationService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentFactory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.addNewAirConsol', {
	                url: '/air/consol/add/?fromHistory&nav_src_bkref_key&forObj&submitAction&forPurpose&shipmentUid',
	                params: {
	                    action: "ADD",
	                    module: "Consol",
	                    forPurpose: "Consol",
	                    shipmentUid: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'consol_shipmentEditCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/consol_shipments_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/air/consol_shipments_new_screen/consol_party_address_clear_service.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentDataService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consolShipmentValidationService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.viewNewAirConsol', {
	                url: '/air/consolnewscreen/view/:consolId?importExport&serviceName&forMawb&&forDo&consolUid&count&fromShipmentId&partyName&masterNo&shipmentDateStartDate&shipmentDateEndDate&origin&destination&freightTerm&carrier&etdStartDate&etdEndDate&etaStartDate&etaEndDate&createdBy&status&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&fromState&fromStateParams&navAesObj&isfromAes',
	                params: {
	                    action: "VIEW",
	                    module: "Consol",
	                    consolId: null,
	                    isfromAes: {
	                        value: null,
	                        squash: true
	                    },
	                    importExport: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    forMawb: {
	                        value: null,
	                        squash: true
	                    },
	                    forDo: {
	                        value: null,
	                        squash: true
	                    },
	                    navAesObj: null,
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentDateStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    fromShipmentId: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentDateEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    etaStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    etaEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    etdStartDate: {
	                        value: null,
	                        squash: true
	                    },
	                    etdEndDate: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceName: {
	                        value: null,
	                        squash: true
	                    },
	                    consolUid: {
	                        value: null,
	                        squash: true
	                    },
	                    partyName: {
	                        value: null,
	                        squash: true
	                    },
	                    masterNo: {
	                        value: null,
	                        squash: true
	                    },
	                    origin: {
	                        value: null,
	                        squash: true
	                    },
	                    destination: {
	                        value: null,
	                        squash: true
	                    },
	                    freightTerm: {
	                        value: null,
	                        squash: true
	                    },
	                    carrier: {
	                        value: null,
	                        squash: true
	                    },
	                    createdBy: {
	                        value: null,
	                        squash: true
	                    },
	                    status: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    forPurpose: null
	                },
	                controller: 'console_shipmentCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/views/consol_shipments_details.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/air/consol_shipments_new_screen/consol_party_address_clear_service.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentAccountsService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentDataService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consolShipmentValidationService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addAirConsolWizard', {
	                url: '/air/consol/widget/add/?fromHistory&nav_src_bkref_key&forObj&submitAction&forPurpose&shipmentUid',
	                params: {
	                    action: "ADDWIZ",
	                    module: "Consol",
	                    forPurpose: "Consol",
	                    shipmentUid: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'consol_shipmentEditCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/consol_shipments_newscreen.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/air/consol_shipments_new_screen/consol_party_address_clear_service.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentAccountsService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentDataService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consolShipmentValidationService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.createAirConsol', {
	                url: '/air/consol/create/?fromHistory&nav_src_bkref_key&forObj&serIndx&docIndx&fromState&shipmentUid',
	                params: {
	                    action: "CREATE",
	                    module: "Consol",
	                    shipmentUid: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    serIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    docIndx: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'consol_shipmentEditCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/consol_shipments_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/air/consol_shipments_new_screen/consol_party_address_clear_service.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentAccountsService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentDataService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consolShipmentValidationService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editAirConsol', {
	                url: '/air/consol/edit/:consolId?fromHistory&submitAction&count&nav_src_bkref_key&forObj&forPurpose&shipmentUid',
	                params: {
	                    action: "EDIT",
	                    module: "Consol",
	                    consolId: null,
	                    shipmentUid: null,
	                    forPurpose: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'consol_shipmentEditCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/consol_shipments_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/air/consol_shipments_new_screen/consol_party_address_clear_service.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentAccountsService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consol_shipmentDataService.js',
	                                    '/app/components/air/consol_shipments_new_screen/consolShipmentValidationService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    '/app/components/crm/new-shipment/ui-shipmentFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.airDocuments', {
	                url: '/air/documents?refCount&submitAction',
	                params: {
	                    action: "SEARCH",
	                    module: "Documents",
	                    refCount: {
	                        value: "0",
	                        squash: false
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'air_doc_ctrl',
	                templateUrl: 'app/components/air/documents/air_documents.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.airDocumentsView', {
	                url: '/air/documents/view/:id?docType&docNo&count',
	                params: {
	                    action: "VIEW",
	                    module: "Documents",
	                    id: null,
	                    docType: {
	                        value: null,
	                        squash: false
	                    },
	                    docNo: {
	                        value: null,
	                        squash: false
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    }
	                },
	                controller: 'air_doc_ctrl',
	                templateUrl: 'app/components/air/documents/view/air_documents_detail.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/crm/new-shipment/ui-shipmentDataService.js',
	                                    'app/components/crm/new-shipment/ui-shipmentFactory.js',
	                                    'app/components/crm/new-shipment/ui-shipmentValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.aesView', {
	                url: '/air/consol/aes/view/:aesId/:aesIndex&fromScreen&shipmentUid&shipmentId',
	                params: {
	                    action: "VIEW",
	                    aesId: null,
	                    consolId: null,
	                    aesIndex: null,
	                    fromScreen: null,
	                    shipmentUid: null,
	                    shipmentId: null
	                },
	                controller: 'aes_Ctrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/views/aes_details.html'
	            }).state('layout.editAes', {
	                url: '/air/consol/aes/edit/:aesId/:fromHistory&navAesObj&fromScreen&shipmentUid&shipmentId',
	                params: {
	                    action: "EDIT",
	                    navAesObj: null,
	                    aesId: null,
	                    consolId: null,
	                    fromHistory: null,
	                    fromScreen: null,
	                    shipmentUid: null,
	                    shipmentId: null
	                },
	                controller: 'aes_EditCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/views/aes_edit.html'
	            }).state('layout.addAes', {
	                url: '/air/aes/add/:fromHistory&navAesObj&fromScreen&shipmentUid&shipmentId',
	                params: {
	                    navAesObj: null,
	                    action: "ADD",
	                    fromHistory: null,
	                    fromScreen: null,
	                    shipmentUid: null,
	                    shipmentId: null
	                },
	                controller: 'aes_EditCtrl',
	                templateUrl: 'app/components/air/consol_shipments_new_screen/views/aes_edit.html'
	            })

	            .state(
	                'layout.airStock', {
	                    url: '/air/stock',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    controller: 'stockMange_Ctrl',
	                    templateUrl: 'app/components/air/stock_management/stock_management.html'
	                })
	            .state('layout.airCFS', {
	                url: '/air/cfs/?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }

	                },
	                controller: 'CFSController',
	                templateUrl: 'app/components/air/cfs/cfs_list.html'
	            })
	            .state('layout.viewAirCFS', {
	                url: '/air/cfs/view/:cfsId?submitAction&searchReceiptNumber&searchTrucker&searchOnHand&searchShipperRefNumber&searchConsignee&searchShipper&searchProDate&searchProNumber&searchServiceName&searchCSF&searchReceiptDate&totalRecord&recordPerPage&selectedPageNumber&sortByColumn&orderByType&fromState&fromStateParams',
	                params: {
	                    action: "VIEW",
	                    cfsId: null,
	                    cfsIndex: null,
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    searchReceiptNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    searchReceiptDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCSF: {
	                        value: null,
	                        squash: true
	                    },
	                    searchServiceName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchProNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    searchProDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchShipper: {
	                        value: null,
	                        squash: true
	                    },
	                    searchConsignee: {
	                        value: null,
	                        squash: true
	                    },
	                    searchShipperRefNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    searchOnHand: {
	                        value: null,
	                        squash: true
	                    },
	                    searchTrucker: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CFSController',
	                templateUrl: 'app/components/air/cfs/view/cfs_detail.html'
	            })
	            .state('layout.addAirCFS', {
	                url: '/air/cfs/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'CFSEditController',
	                templateUrl: 'app/components/air/cfs/cfs_edit.html'
	            })
	            .state('layout.editAirCFS', {
	                url: '/air/cfs/edit/:cfsId/:serviceUid/fromHistory',
	                params: {
	                    action: "EDIT",
	                    cfsId: null,
	                    serviceUid: null,
	                    fromHistory: null
	                },
	                controller: 'CFSEditController',
	                templateUrl: 'app/components/air/cfs/cfs_edit.html'
	            })
	            .state('layout.createAirCFS', {
	                url: '/air/cfs/create/:shipmentUid/:serviceUid/:fromState/:fromStateParams',
	                params: {
	                    action: "CREATE",
	                    shipmentUid: null,
	                    serviceUid: null,
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CFSEditController',
	                templateUrl: 'app/components/air/cfs/cfs_edit.html'
	            }).state('layout.airlinePrebooking', {
	                url: '/air/airline_prebooking/?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'AirlinePrebookingController',
	                templateUrl: 'app/components/air/airline_prebooking/airline_prebooking.html'
	            }).state('layout.addAirlinePrebooking', {
	                url: '/air/airline_prebooking/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'AirlinePrebookingEditController',
	                templateUrl: 'app/components/air/airline_prebooking/airline_prebooking_edit.html'
	            }).state('layout.viewAirlinePrebooking', {
	                url: '/air/airline_prebooking/view/:id?submitAction',
	                params: {
	                    action: "VIEW",
	                    id: null,
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'AirlinePrebookingController',
	                templateUrl: 'app/components/air/airline_prebooking/views/airline_prebooking_details.html'
	            }).state('layout.editAirlinePrebooking', {
	                url: '/air/airline_prebooking/edit/?prebookingId:fromHistory',
	                params: {
	                    action: "EDIT",
	                    fromHistory: null,
	                    prebookingId: null
	                },
	                controller: 'AirlinePrebookingEditController',
	                templateUrl: 'app/components/air/airline_prebooking/airline_prebooking_edit.html'
	            })

	            /* NYT DONE - Starts */
	            .state('layout.service', {
	                url: '/master/service?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ServiceMasterCtrl',
	                templateUrl: 'app/components/master/service/service.html'
	            })

	            .state('layout.addService', {
	                url: '/master/service/add/?fromHistory&submitAction',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ServiceMasterOperationCtrl',
	                templateUrl: 'app/components/master/service/service_operation.html'
	            })
	            .state('layout.editService', {
	                url: '/master/service/edit/:serviceId/?fromHistory&submitAction',
	                params: {
	                    action: "EDIT",
	                    serviceId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ServiceMasterOperationCtrl',
	                templateUrl: 'app/components/master/service/service_operation.html'
	            }).state(
	                'layout.company', {
	                    url: '/master/company/?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'companyMasterController',
	                    templateUrl: 'app/components/master/company/company.html'
	                })
	            .state(
	                'layout.addCompany', {
	                    url: '/master/company/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'companyMasterOperationCtrl',
	                    templateUrl: 'app/components/master/company/company_operation.html'
	                })
	            .state(
	                'layout.editCompany', {
	                    url: '/master/company/edit/:companyId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        tosId: null,
	                        fromHistory: null
	                    },
	                    controller: 'companyMasterOperationCtrl',
	                    templateUrl: 'app/components/master/company/company_operation.html'
	                })




	            .state(
	                'layout.carrier', {
	                    url: '/master/carrier?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'CarrierCtrl',
	                    templateUrl: 'app/components/master/carrier/carrier.html'
	                })
	            .state(
	                'layout.addCarrier', {
	                    url: '/master/carrier/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'CarrierOperationCtrl',
	                    templateUrl: 'app/components/master/carrier/carrier_operation.html'
	                })
	            .state(
	                'layout.editCarrier', {
	                    url: '/master/carrier/edit/:carrierId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        carrierId: null,
	                        fromHistory: null
	                    },
	                    controller: 'CarrierOperationCtrl',
	                    templateUrl: 'app/components/master/carrier/carrier_operation.html'
	                })

	            .state(
	                'layout.carrierRate', {
	                    url: '/master/carrier_rate?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'CarrierRateController',
	                    templateUrl: 'app/components/master/carrier_rate/carrier_rate.html'
	                })
	            .state(
	                'layout.carrierRateAdd', {
	                    url: '/master/carrier_rate/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'CarrierRateOperationController',
	                    templateUrl: 'app/components/master/carrier_rate/carrier_rate_operation.html'
	                })
	            .state(
	                'layout.carrierRateEdit', {
	                    url: '/master/carrier_rate/edit/:id/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        id: null,
	                        fromHistory: null
	                    },
	                    controller: 'CarrierRateOperationController',
	                    templateUrl: 'app/components/master/carrier_rate/carrier_rate_edit.html'
	                })
	            .state(
	                'layout.viewCarrierRate', {
	                    url: '/master/carrier_rate/view/:id/:index',
	                    params: {
	                        action: "VIEW",
	                        id: null,
	                        index: null
	                    },
	                    controller: 'CarrierRateController',
	                    templateUrl: 'app/components/master/carrier_rate/carrier_rate.html'
	                })


	            .state('layout.port', {
	                url: '/master/port?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'portCtrl',
	                templateUrl: 'app/components/master/port/port.html'
	            })
	            .state('layout.addPort', {
	                url: '/master/port/add/?fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'portOperationCtrl',
	                templateUrl: 'app/components/master/port/port_operation.html'
	            })
	            .state('layout.editPort', {
	                url: '/master/port/edit/:portId&fromHistory',
	                params: {
	                    action: "EDIT",
	                    portId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'portOperationCtrl',
	                templateUrl: 'app/components/master/port/port_operation.html'
	            })
	            .state('layout.portGroup', {
	                url: '/master/portgroup?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'portGroupCtrl',
	                templateUrl: 'app/components/master/port_group/port_group.html'
	            })

	            .state('layout.addPortGroup', {
	                url: '/master/portgroup/add/?fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'portGroupOperationCtrl',
	                templateUrl: 'app/components/master/port_group/port_group_operation.html'
	            })


	            .state('layout.editPortGroup', {
	                url: '/master/portgroup/edit/:portGroupId&fromHistory',
	                params: {
	                    action: "EDIT",
	                    portGroupId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'portGroupOperationCtrl',
	                templateUrl: 'app/components/master/port_group/port_group_operation.html'
	            })

	            .state(
	                'layout.unit', {
	                    url: '/master/unit/?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'UnitController',
	                    templateUrl: 'app/components/master/unit/unit.html'
	                })
	            .state(
	                'layout.addUnit', {
	                    url: '/master/unit/add/:fromHistory/?submitAction',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null,
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'UnitOperationController',
	                    templateUrl: 'app/components/master/unit/unit_operation.html'
	                })
	            .state(
	                'layout.editUnit', {
	                    url: '/master/unit/edit/:unitId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        unitId: null,
	                        fromHistory: null
	                    },
	                    controller: 'UnitOperationController',
	                    templateUrl: 'app/components/master/unit/unit_operation.html'
	                })
	            .state(
	                'layout.tos', {
	                    url: '/master/tos/?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'TosController',
	                    templateUrl: 'app/components/master/tos/tos.html'
	                })
	            .state(
	                'layout.addTos', {
	                    url: '/master/tos/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'tosOperationCtrl',
	                    templateUrl: 'app/components/master/tos/tos_operation.html'
	                })
	            .state(
	                'layout.editTos', {
	                    url: '/master/tos/edit/:tosId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        tosId: null,
	                        fromHistory: null
	                    },
	                    controller: 'tosOperationCtrl',
	                    templateUrl: 'app/components/master/tos/tos_operation.html'
	                })

	            .state(
	                'layout.pack', {
	                    url: '/master/pack?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'packMasterController',
	                    templateUrl: 'app/components/master/pack/pack.html'
	                })
	            .state(
	                'layout.addPack', {
	                    url: '/master/pack/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'packMasterEditController',
	                    templateUrl: 'app/components/master/pack/pack_operation.html'
	                })
	            .state(
	                'layout.editPack', {
	                    url: '/master/pack/edit/:packId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        packId: null,
	                        fromHistory: null
	                    },
	                    controller: 'packMasterEditController',
	                    templateUrl: 'app/components/master/pack/pack_operation.html'
	                }).state(
	                'layout.charter', {
	                    url: '/master/charter?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'charterMasterController',
	                    templateUrl: 'app/components/master/charter/charter.html'
	                })
	            .state(
	                'layout.addCharter', {
	                    url: '/master/charter/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'charterMasterEditController',
	                    templateUrl: 'app/components/master/charter/charter_operation.html'
	                })
	            .state(
	                'layout.editCharter', {
	                    url: '/master/charter/edit/:charterId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        packId: null,
	                        fromHistory: null
	                    },
	                    controller: 'charterMasterEditController',
	                    templateUrl: 'app/components/master/charter/charter_operation.html'
	                }).state(
	                'layout.account', {
	                    url: '/master/account?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'accountMasterController',
	                    templateUrl: 'app/components/master/account/account.html'
	                })
	            .state(
	                'layout.addAccount', {
	                    url: '/master/account/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'accountMasterEditController',
	                    templateUrl: 'app/components/master/account/account_operation.html'
	                })
	            .state(
	                'layout.editAccount', {
	                    url: '/master/account/edit/:accountId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        accountId: null,
	                        fromHistory: null
	                    },
	                    controller: 'accountMasterEditController',
	                    templateUrl: 'app/components/master/account/account_operation.html'
	                })


	            .state('layout.currency', {
	                url: '/master/currency?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CurrencyMasterCtrl',
	                templateUrl: 'app/components/master/currency/currency.html'
	            })
	            .state('layout.addCurrency', {
	                url: '/master/currency/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'CurrencyOperationCtrl',
	                templateUrl: 'app/components/master/currency/currency_operation.html'
	            })
	            .state('layout.editCurrency', {
	                url: '/master/currency/edit/:currencyId/:fromHistory',
	                params: {
	                    action: "EDIT",
	                    currencyId: null,
	                    fromHistory: null
	                },
	                controller: 'CurrencyOperationCtrl',
	                templateUrl: 'app/components/master/currency/currency_operation.html'
	            })

	            .state(
	                'layout.currencyRate', {
	                    url: '/master/currency_rate?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    // controller : 'CurrencyCtrl',
	                    templateUrl: 'app/components/master/currency_rate/currency_rate.html'
	                })
	            .state(
	                'layout.addCurrencyRate', {
	                    url: '/master/currency_rate/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'currencyRateOperationCtrl',
	                    templateUrl: 'app/components/master/currency_rate/currency_rate_operation.html'
	                })
	            .state(
	                'layout.editCurrencyRate', {
	                    url: '/master/currency_rate/edit/:currencyRateId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        currencyRateId: null,
	                        fromHistory: null
	                    },
	                    controller: 'currencyRateOperationCtrl',
	                    templateUrl: 'app/components/master/currency_rate/currency_rate_operation.html'
	                })
	            .state(
	                'layout.charge', {
	                    url: '/master/charge?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'ChargeCtrl',
	                    templateUrl: 'app/components/master/charge/charge.html'
	                })
	            .state(
	                'layout.addCharge', {
	                    url: '/master/charge/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'ChargeOperationCtrl',
	                    templateUrl: 'app/components/master/charge/charge_operation.html'
	                })
	            .state(
	                'layout.editCharge', {
	                    url: '/master/charge/edit/:chargeId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        chargeId: null,
	                        fromHistory: null
	                    },
	                    controller: 'ChargeOperationCtrl',
	                    templateUrl: 'app/components/master/charge/charge_operation.html'
	                })
	            .state(
	                'layout.commodity', {
	                    url: '/master/commodity?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'CommodityCtrl',
	                    templateUrl: 'app/components/master/commodity/commodity.html'
	                })
	                
	                .state(
	                'layout.leadTypeMaster', {
	                    url: '/master/leadType?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'LeadTypeCtrl',
	                    templateUrl: 'app/components/master/leadtype/leadtype.html'
	                })
	                
	                .state(
	                'layout.actionMaster', {
	                    url: '/master/actionMaster?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'ActionSourceCtrl',
	                    templateUrl: 'app/components/master/action/action.html'
	                })
	                
	                .state(
	                'layout.leadStatusMaster', {
	                    url: '/master/leadStatus?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'LeadStatusCtrl',
	                    templateUrl: 'app/components/master/leadstatus/leadstatus.html'
	                })
	                
	                .state(
	                'layout.leadSourceMaster', {
	                    url: '/master/leadSource?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'LeadSourceCtrl',
	                    templateUrl: 'app/components/master/leadsource/leadsource.html'
	                })
	                
	                .state(
	                'layout.editleadSource', {
	                    url: '/master/leadSource/edit/:leadSourceId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        leadSourceId: null,
	                        fromHistory: null
	                    },
	                    controller: 'LeadSourceAddCtrl',
	                    templateUrl: 'app/components/master/leadsource/leadsource_add.html'
	                })
	                
	                .state(
	                'layout.editAction', {
	                    url: '/master/actionMaster/edit/:actionId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        actionId: null,
	                        fromHistory: null
	                    },
	                    controller: 'ActionSourceAddCtrl',
	                    templateUrl: 'app/components/master/action/action_add.html'
	                })
	                
	                
	                .state(
	                'layout.addLeadSource', {
	                    url: '/master/leadSource/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'LeadSourceAddCtrl',
	                    templateUrl: 'app/components/master/leadsource/leadsource_add.html'
	                })
	                
	                .state(
	                'layout.addAction', {
	                    url: '/master/actionMaster/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'ActionSourceAddCtrl',
	                    templateUrl: 'app/components/master/action/action_add.html'
	                })
	                
	                
	                .state(
	                'layout.addLeadStatus', {
	                    url: '/master/leadStatus/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'LeadStatusAddCtrl',
	                    templateUrl: 'app/components/master/leadstatus/leadstatus_add.html'
	                })
	                
	                .state(
	                'layout.addLeadType', {
	                    url: '/master/leadType/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'LeadTypeAddCtrl',
	                    templateUrl: 'app/components/master/leadtype/leadtype_add.html'
	                })
	                
	                
	                 .state(
	                'layout.editleadType', {
	                    url: '/master/leadType/edit/:leadTypeId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        leadTypeId: null,
	                        fromHistory: null
	                    },
	                    controller: 'LeadTypeAddCtrl',
	                    templateUrl: 'app/components/master/leadtype/leadtype_add.html'
	                })
	                
	                .state(
	                'layout.editleadStatus', {
	                    url: '/master/leadStatus/edit/:leadStatusId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        leadStatusId: null,
	                        fromHistory: null
	                    },
	                    controller: 'LeadStatusAddCtrl',
	                    templateUrl: 'app/components/master/leadstatus/leadstatus_add.html'
	                })
	                
	                
	                
	            .state(
	                'layout.addCommodity', {
	                    url: '/master/commodity/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'CommodityOperationCtrl',
	                    templateUrl: 'app/components/master/commodity/commodity_operation.html'
	                })
	            .state(
	                'layout.editCommodity', {
	                    url: '/master/commodity/edit/:commodityId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        commodityId: null,
	                        fromHistory: null
	                    },
	                    controller: 'CommodityOperationCtrl',
	                    templateUrl: 'app/components/master/commodity/commodity_operation.html'
	                })
	            .state(
	                'layout.category', {
	                    url: '/master/category?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'categoryCtrl',
	                    templateUrl: 'app/components/master/category/category.html'
	                })
	            .state(
	                'layout.addCategory', {
	                    url: '/master/category/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'categoryOperationCtrl',
	                    templateUrl: 'app/components/master/category/category_operation.html'
	                })
	            .state(
	                'layout.editCategory', {
	                    url: '/master/category/edit/:categoryId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        categoryId: null,
	                        fromHistory: null
	                    },
	                    controller: 'categoryOperationCtrl',
	                    templateUrl: 'app/components/master/category/category_operation.html'
	                })
	            .state(
	                'layout.docprefix', {
	                    url: '/master/docprefix?submitAction',
	                    params: {
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        },
	                        action: "SEARCH"
	                    },
	                    controller: 'DocPrefixCtrl',
	                    templateUrl: 'app/components/master/docprefix/docprefix.html'
	                })
	            .state(
	                'layout.addDocprefix', {
	                    url: '/master/docprefix/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'docprefixOperationCtrl',
	                    templateUrl: 'app/components/master/docprefix/docprefix_operation.html'
	                })
	            .state(
	                'layout.editDocprefix', {
	                    url: '/master/docprefix/edit/:docprefixId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        docprefixId: null,
	                        fromHistory: null
	                    },
	                    controller: 'docprefixOperationCtrl',
	                    templateUrl: 'app/components/master/docprefix/docprefix_operation.html'
	                })


	            .state(
	                'layout.party', {
	                    url: '/master/party/?submitAction&refCount',
	                    params: {
	                        action: "SEARCH",
	                        module: "Party",
	                        refCount: {
	                            value: "0",
	                            squash: false
	                        },
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'PartyMasterCtrl',
	                    templateUrl: 'app/components/master/party/party.html'
	                })
	            .state('layout.viewParty', {
	                url: '/master/party/view/:partyId?searchPartyCode&searchPartyName&searchCountryName&searchStatus&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord',
	                params: {
	                    action: "VIEW",
	                    module: "Party",
	                    partyId: null,
	                    searchPartyCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchPartyName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCountryName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchStatus: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'PartyMasterCtrl',
	                templateUrl: 'app/components/master/party/party.html'
	            })
	            .state('layout.addParty', {
	                url: '/master/party/add/:fromHistory?nav_src_bkref_key&forObj&serIndx&docIndx&category&selectedTab',
	                params: {
	                    action: "ADD",
	                    module: "Party",
	                    fromHistory: null,
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    serIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    docIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedTab: {
	                        value: null,
	                        squash: true
	                    },
	                    category: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'PartyMasterOperationCtrl',
	                templateUrl: 'app/components/master/party/party_operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/grade/gradeMasterFactory.js',
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editParty', {
	                url: '/master/party/edit/:partyId/:fromHistory?nav_src_bkref_key&forObj&count&serIndx&docIndx&category&submitAction&selectedTab',
	                params: {
	                    action: "EDIT",
	                    module: "Party",
	                    partyId: null,
	                    fromHistory: null,
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    serIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    docIndx: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedTab: {
	                        value: null,
	                        squash: true
	                    },
	                    category: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'PartyMasterOperationCtrl',
	                templateUrl: 'app/components/master/party/party_operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/grade/gradeMasterFactory.js',
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.automail', {
	                url: '/master/auto_mail?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                // controller : 'autoMailOperationCtrl',
	                templateUrl: 'app/components/master/auto_mail/auto_mail.html'
	            })
	            .state(
	                'layout.addAutomail', {
	                    url: '/master/auto_mail/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        pageAction: null,
	                        fromHistory: null
	                    },
	                    controller: 'autoMailOperationCtrl',
	                    templateUrl: 'app/components/master/auto_mail/auto_mail_operation.html'
	                })
	            .state(
	                'layout.editAutomail', {
	                    url: '/master/auto_mail/edit/:automailId/:fromHistory&groupId',
	                    params: {
	                        action: "EDIT",
	                        pageAction: null,
	                        automailId: null,
	                        groupId: null,
	                        fromHistory: null
	                    },
	                    controller: 'autoMailOperationCtrl',
	                    templateUrl: 'app/components/master/auto_mail/auto_mail_operation.html'
	                })
	            .state('layout.costCenter', {
	                url: '/master/costCenter?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                templateUrl: 'app/components/master/costCenter/costCenter.html'
	            })
	            .state('layout.addCostCenter', {
	                url: '/master/costCenter/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'costCenterOperaionCtrl',
	                templateUrl: 'app/components/master/costCenter/costCenter_operation.html'
	            })
	            .state('layout.editCostCenter', {
	                url: '/master/costCenter/edit/:costCenterId/:fromHistory',
	                params: {
	                    action: "EDIT",
	                    costCenterId: null,
	                    fromHistory: null
	                },
	                controller: 'costCenterOperaionCtrl',
	                templateUrl: 'app/components/master/costCenter/costCenter_operation.html'
	            })
	            .state(
	                'layout.serviceType', {
	                    url: '/master/serviceType?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'serviceTypeCtrl',
	                    templateUrl: 'app/components/master/serviceType/serviceType.html'
	                })
	            .state(
	                'layout.addServiceType', {
	                    url: '/master/serviceType/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'serviceTypeOperationCtrl',
	                    templateUrl: 'app/components/master/serviceType/serviceType_operation.html'
	                })
	            .state(
	                'layout.editServiceType', {
	                    url: '/master/serviceType/edit/:serviceTypeId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        serviceTypeId: null,
	                        fromHistory: null
	                    },
	                    controller: 'serviceTypeOperationCtrl',
	                    templateUrl: 'app/components/master/serviceType/serviceType_operation.html'
	                })
	            .state(
	                'layout.logo', {
	                    url: '/master/logo?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'logoCtrl',
	                    templateUrl: 'app/components/master/logo/logo.html'
	                })
	            .state(
	                'layout.addLogo', {
	                    url: '/master/logo/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'logoOperationCtrl',
	                    templateUrl: 'app/components/master/logo/logo_operation.html'
	                })
	            .state(
	                'layout.editLogo', {
	                    url: '/master/logo/edit/:logoId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        logoId: null,
	                        fromHistory: null
	                    },
	                    controller: 'logoOperationCtrl',
	                    templateUrl: 'app/components/master/logo/logo_operation.html'
	                })
	            .state(
	                'layout.partyType', {
	                    url: '/master/partyType?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'partyTypeCtrl',
	                    templateUrl: 'app/components/master/partyType/partyType.html'
	                })
	            .state(
	                'layout.addPartyType', {
	                    url: '/master/partyType/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'partyTypeOperationCtrl',
	                    templateUrl: 'app/components/master/partyType/partyType_operation.html'
	                })
	            .state(
	                'layout.editPartyType', {
	                    url: '/master/partyType/edit/:partyTypeId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        partyTypeId: null,
	                        fromHistory: null
	                    },
	                    controller: 'partyTypeOperationCtrl',
	                    templateUrl: 'app/components/master/partyType/partyType_operation.html'
	                })
	            .state(
	                'layout.generalLedgerCA', {
	                    url: '/master/general_ledger',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    // controller : 'CurrencyCtrl',
	                    templateUrl: 'app/components/master/general_ledger/general_ledger.html'
	                })
	            .state(
	                'layout.addGeneralLedgerCA', {
	                    url: '/master/general_ledger/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    // controller : 'glCtrls',
	                    templateUrl: 'app/components/master/general_ledger/general_ledger_operation.html'
	                })
	            .state(
	                'layout.editGeneralLedgerCA', {
	                    url: '/master/general_ledger/edit/:general_ledgerId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        general_ledgerId: null,
	                        fromHistory: null
	                    },
	                    //controller : 'glCtrls',
	                    templateUrl: 'app/components/master/general_ledger/general_ledger_operation.html'
	                })
	            .state('layout.generalLedgerNewCA', {
	                url: '/master/general-ledger-new',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'glCtrls',
	                templateUrl: 'app/components/master/general-ledger-new/general_ledger.html'
	            })
	            .state(
	                'layout.addGeneralLedgerNewCA', {
	                    url: '/master/general-ledger-new/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'glCtrls',
	                    templateUrl: 'app/components/master/general-ledger-new/general_ledger_operation.html'
	                })
	            .state(
	                'layout.editGeneralLedgerNewCA', {
	                    url: '/master/general-ledger-new/edit/:general_ledgerId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        general_ledgerId: null,
	                        fromHistory: null
	                    },
	                    controller: 'glCtrls',
	                    templateUrl: 'app/components/master/general-ledger-new/general_ledger_operation.html'
	                })




	            .state(
	                'layout.subLedgerCA', {
	                    url: '/master/sub_ledger_master',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    // controller : 'glCtrls',
	                    templateUrl: 'app/components/master/sub_ledger_master/sub_ledger_master.html'
	                })
	            .state(
	                'layout.subLedgerList', {
	                    url: '/master/sub_ledger_master_new_screen',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    // controller : 'glCtrls',
	                    templateUrl: 'app/components/master/sub_ledger_master_new_screen/sub_ledger_master.html'
	                })
	            .state(
	                'layout.addEditSubLedgerCA', {
	                    url: '/master/sub_ledger_master_new_screen/edit/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        fromHistory: null
	                    },
	                    // controller : 'CurrencyOperationCtrl',
	                    templateUrl: 'app/components/master/sub_ledger_master_new_screen/sub_ledger_master_editoperation.html'
	                })
	            .state(
	                'layout.addSubLedgerCA', {
	                    url: '/master/sub_ledger_master/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    // controller : 'CurrencyOperationCtrl',
	                    templateUrl: 'app/components/master/sub_ledger_master/sub_ledger_master_operation.html'
	                })
	            .state(
	                'layout.editSubLedgerCA', {
	                    url: '/master/sub_ledger_master/edit/:sub_ledger_masterId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        sub_ledger_masterId: null,
	                        fromHistory: null
	                    },
	                    // controller : 'CurrencyOperationCtrl',
	                    templateUrl: 'app/components/master/sub_ledger_master/sub_ledger_master_operation.html'
	                })

	            .state(
	                'layout.defaultCharges', {
	                    url: '/crm/default_charges&count',
	                    params: {
	                        action: "SEARCH",
	                        count: null
	                    },
	                    controller: 'defaultChrgeCtrl',
	                    templateUrl: '/app/components/crm/default_charges/default_charges.html'
	                })
	            .state(
	                'layout.addDefaultCharges', {
	                    url: '/crm/default_charges/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'defaultChargeOperational',
	                    templateUrl: '/app/components/crm/default_charges/default_charges_add.html'
	                })
	            .state(
	                'layout.editDefaultCharges', {
	                    url: '/crm/default_charges/edit/:id/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        fromHistory: null,
	                        id: null
	                    },
	                    controller: 'defaultChargeOperational',
	                    templateUrl: '/app/components/crm/default_charges/default_charges_edit.html'
	                })
	            .state(
	                'layout.report', {
	                    url: '/reports/reports_list',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    templateUrl: 'app/components/reports/reports.html'
	                })
	            .state(
	                'layout.partyGroup', {
	                    url: '/master/partygroup/?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'PartyGroupController',
	                    templateUrl: 'app/components/master/party_group_master/party_group_master.html'
	                })
	            .state(
	                'layout.addPartyGroup', {
	                    url: '/master/party_group/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'PartyGroupEditController',
	                    templateUrl: 'app/components/master/party_group_master/party_group_operation.html'
	                })
	            .state(
	                'layout.viewPartyGroup', {
	                    url: '/master/party_group/view/:partyGroupId/:partyGroupIndex',
	                    params: {
	                        action: "VIEW",
	                        partyGroupId: null,
	                        partyGroupIndex: null
	                    },
	                    controller: 'PartyGroupController',
	                    templateUrl: 'app/components/master/party_group_master/party_group_master.html'
	                })
	            .state(
	                'layout.editPartyGroup', {
	                    url: '/master/party_group/edit/:partyGroupId/?fromHistory',
	                    params: {
	                        action: "EDIT",
	                        partyGroupId: null,
	                        fromHistory: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'PartyGroupEditController',
	                    templateUrl: 'app/components/master/party_group_master/party_group_operation.html'
	                })
	                
	                
	                .state('layout.callType', {
	                url: '/master/call_type',
	                params: {
	                    action: "SEARCH",
	                },
	                controller: 'CallTypeController',
	                templateUrl: 'app/components/master/call_type/call_type.html'
	            })
                
	            .state('layout.addCallType', {
	                url: '/master/call_type/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'CallTypeOperationCtrl',
	                templateUrl: '/app/components/master/call_type/call_type_operation.html'
	            })
	            
	            .state(
	                'layout.editCallType', {
	                    url: '/master/call_type/edit/:callTypeId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        callTypeId: null,
	                        fromHistory: null
	                    },
	                    controller: 'CallTypeOperationCtrl',
	                    templateUrl: 'app/components/master/call_type/call_type_operation.html'
	                })
	            .state('layout.callTypeStatus', {
	                url: '/master/call_type_status',
	                params: {
	                    action: "SEARCH",
	                },
	                controller: 'CallTypeStatusController',
	                templateUrl: 'app/components/master/call_type_status/call_type_status.html'
	            })
                
	            .state('layout.addCallTypeStatus', {
	                url: '/master/call_type_status/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'CallTypeStatusOperationCtrl',
	                templateUrl: '/app/components/master/call_type_status/call_type_status_operation.html'
	            })
	            
	            .state(
	                'layout.editCallTypeStatus', {
	                    url: '/master/call_type_status/edit/:callTypeStatusId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        callTypeId: null,
	                        fromHistory: null
	                    },
	                    controller: 'CallTypeStatusOperationCtrl',
	                    templateUrl: 'app/components/master/call_type_status/call_type_status_operation.html'
	                })
	                
	             .state('layout.competetor', {
	                url: '/master/competitor',
	                params: {
	                    action: "SEARCH",
	                },
	                controller: 'CompetetorController',
	                templateUrl: 'app/components/master/competitor/competetor.html'
	            })
                
	            .state('layout.addCompetetor', {
	                url: '/master/competitor/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'CompetetorOperationCtrl',
	                templateUrl: '/app/components/master/competitor/competetor_operation.html'
	            })
	            
	            .state(
	                'layout.editCompetetor', {
	                    url: '/master/competitor/edit/:competetorId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        callTypeId: null,
	                        fromHistory: null
	                    },
	                    controller: 'CompetetorOperationCtrl',
	                    templateUrl: 'app/components/master/competitor/competetor_operation.html'
	                })

	            .state('layout.referenceType', {
	                url: '/master/reference_type/?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ReferenceTypeController',
	                templateUrl: '/app/components/master/reference_type/reference_type.html'
	            })
	            .state('layout.addReferenceType', {
	                url: '/master/reference_type/add/:fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: null
	                },
	                controller: 'ReferenceTypeEditController',
	                templateUrl: '/app/components/master/reference_type/reference_type_operation.html'
	            })
	            .state('layout.editReferenceType', {
	                url: '/master/reference_type/edit/:id/?fromHistory',
	                params: {
	                    action: "EDIT",
	                    id: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ReferenceTypeEditController',
	                templateUrl: '/app/components/master/reference_type/reference_type_operation.html'
	            })
	            .state('layout.daybookMaster', {
	                url: '/master/daybookMaster',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'DaybookMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/daybook/daybook-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/daybook/daybook_master_ctrl.js',
	                                    'app/components/master/daybook/daybook_master_factory.js',
	                                    'app/components/master/daybook/daybook_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.daybookMasterView', {
	                url: '/master/daybookMaster/view/:id?submitAction&index&totalRecord&sortByColumn&orderByType&selectedPageNumber&recordPerPage&searchDaybookCode&searchDaybookName&searchLocationName&searcDocumentTypeName&searchCashAccountCode&searchCashAccountName&searchBankAccountCode&searchBankAccountName&searchBlockDate&searchStatus&fromHistory',
	                params: {
	                    id: null,
	                    index: null,
	                    action: "VIEW",
	                    module: "Daybook Master",
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    searchDaybookCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchDaybookName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchLocationName: {
	                        value: null,
	                        squash: true
	                    },
	                    searcDocumentTypeName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCashAccountCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCashAccountName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchBankAccountCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchBankAccountName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchBlockDate: {
	                        value: null,
	                        squash: true
	                    },
	                    searchStatus: {
	                        value: null,
	                        squash: true
	                    },
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DaybookMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/daybook/daybook_details.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/daybook/daybook_master_ctrl.js',
	                                    'app/components/master/daybook/daybook_master_factory.js',
	                                    'app/components/master/daybook/daybook_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.daybookMasterAdd', {
	                url: '/master/daybookMaster/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Daybook Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DaybookMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/daybook/daybook_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/daybook/daybook_master_ctrl.js',
	                                    'app/components/master/daybook/daybook_master_factory.js',
	                                    'app/components/master/daybook/daybook_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.daybookMasterEdit', {
	                url: '/master/daybookMaster/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Daybook Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DaybookMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/daybook/daybook_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/daybook/daybook_master_ctrl.js',
	                                    'app/components/master/daybook/daybook_master_factory.js',
	                                    'app/components/master/daybook/daybook_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.invoice', {
	                url: '/finance/invoice?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'invoiceCtrl',
	                templateUrl: 'app/components/finance/invoice/invoice.html'
	            })
	            .state('layout.invoiceCreate', {
	                url: '/sales/invoice/create/?fromHistory&nav_src_bkref_key&forObj&shipmentId&shipmentServiceId&consolId&fromState&fromStateParams&forPurpose&fromScreen',
	                params: {
	                    action: "CREATE",
	                    module: "Invoice",
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    fromScreen: {
	                        value: null,
	                        squash: true
	                    },
	                    forPurpose: {
	                        value: null,
	                        squash: true
	                    },
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentId: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentServiceId: {
	                        value: null,
	                        squash: true
	                    },
	                    consolId: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    }

	                },
	                controller: 'invoice_edit_ctrl',
	                templateUrl: '/app/components/finance/invoice/invoice_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/finance/invoice/invoiceCreditNoteValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.viewInvoice', {
	                url: '/finance/invoice/view/?fromHistory&shipmentUid&shipmentServiceId&invoiceId&invoiceIndex&consolUid&fromState&searchFlag&submitAction&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&fromStateParams',
	                params: {
	                    action: "VIEW",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    invoiceId: {
	                        value: null,
	                        squash: true
	                    },
	                    invoiceIndex: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentServiceId: {
	                        value: null,
	                        squash: true
	                    },
	                    consolUid: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    searchFlag: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'invoiceCtrl',
	                templateUrl: 'app/components/finance/invoice/view/invoice_detail.html'
	            })

	            .state('layout.stcgroupmaster', {
	                url: '/master/stcgroup_master/?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'STCGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/stcgroup/stcgroup-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/stcgroup/stcGroupMasterController.js',
	                                    'app/components/master/stcgroup/stcGroupMasterFactory.js',
	                                    'app/components/master/stcgroup/stcGroupMasterDataService.js',
	                                    'app/components/master/stcgroup/stcGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.stcgroupmasterAdd', {
	                url: '/master/stcgroup_master/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "STC Group Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'STCGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/stcgroup/stcgroup-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/stcgroup/stcGroupMasterController.js',
	                                    'app/components/master/stcgroup/stcGroupMasterFactory.js',
	                                    'app/components/master/stcgroup/stcGroupMasterDataService.js',
	                                    'app/components/master/stcgroup/stcGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.stcgroupmasterEdit', {
	                url: '/master/stcgroup_master/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "STC Group Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'STCGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/stcgroup/stcgroup-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/stcgroup/stcGroupMasterController.js',
	                                    'app/components/master/stcgroup/stcGroupMasterFactory.js',
	                                    'app/components/master/stcgroup/stcGroupMasterDataService.js',
	                                    'app/components/master/stcgroup/stcGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.stcgroupmasterView', {
	                url: '/master/stcgroup_master/view/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "VIEW",
	                    module: "STC Group Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'STCGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/stcgroup/stcgroup-view.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/stcgroup/stcGroupMasterController.js',
	                                    'app/components/master/stcgroup/stcGroupMasterFactory.js',
	                                    'app/components/master/stcgroup/stcGroupMasterDataService.js',
	                                    'app/components/master/stcgroup/stcGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.creditNoteCost', {
	                url: '/finance/creditNoteCost?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'credit_Note_Ctrl',
	                templateUrl: 'app/components/finance/credit_note_cost/credit_note_cost.html'
	            })
	            .state('layout.creditNoteCostCreate', {
	                url: '/sales/creditNoteCost/create/?fromHistory&shipmentId&shipmentServiceId&consolId&fromState&fromStateParams&nav_src_bkref_key&forObj&fromScreen&forPurpose',
	                params: {
	                    action: "CREATE",
	                    module: "CreditNoteCost",
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    fromScreen: {
	                        value: null,
	                        squash: true
	                    },
	                    forPurpose: {
	                        value: null,
	                        squash: true
	                    },
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentId: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentServiceId: {
	                        value: null,
	                        squash: true
	                    },
	                    consolId: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'credit_note_edit_ctrl',
	                templateUrl: 'app/components/finance/credit_note_cost/credit_note_cost_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/finance/invoice/invoiceCreditNoteValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })


	            .state('layout.viewCreditNoteCost', {
	                url: '/finance/creditNoteCost/view/?fromHistory&shipmentUid&creditNoteCostId&creditNoteCostIndex&consolUid&fromState&searchFlag&submitAction&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&fromStateParams',
	                params: {
	                    action: "VIEW",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    creditNoteCostId: {
	                        value: null,
	                        squash: true
	                    },
	                    creditNoteCostIndex: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    consolUid: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    searchFlag: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'credit_Note_Ctrl',
	                templateUrl: 'app/components/finance/credit_note_cost/view/credit_note_cost_detail.html'
	            })
	            .state('layout.creditNoteRevenue', {
	                url: '/finance/creditNoteRevenue?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'finance_Ctrl',
	                templateUrl: 'app/components/finance/credit_note_revenue/credit-note_revenue.html'
	            })


	            .state('layout.addCreditNoteRevenue', {
	                url: '/finance/creditNoteRevenue/add/?fromHistory&shipmentId&invoiceId&shipmentServiceId&consolId&fromState&fromStateParams',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    invoiceId: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentServiceId: {
	                        value: null,
	                        squash: true
	                    },
	                    consolUid: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'finance_edit_ctrl',
	                templateUrl: 'app/components/finance/credit_note_revenue/cn_revenue_edit.html'
	            })
	            .state('layout.viewCreditNoteRevenue', {
	                url: '/finance/creditNoteRevenue/view/?fromHistory&shipmentUid&creditNoteRevenueId&creditNoteRevenueIndex&consolUid&fromState&searchFlag&submitAction&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&fromStateParams',
	                params: {
	                    action: "VIEW",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    creditNoteRevenueId: {
	                        value: null,
	                        squash: true
	                    },
	                    creditNoteRevenueIndex: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    consolUid: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    searchFlag: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'finance_Ctrl',
	                templateUrl: 'app/components/finance/credit_note_revenue/view/cn_revenue_detail.html'
	            })

	            .state('layout.viewProvisional', {
	                url: '/finance/provisional/view/?fromHistory&shipmentUid&shipmentServiceId&provisionalId&provisionalIndex&consolUid&fromState&searchFlag&submitAction&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&fromStateParams',
	                params: {
	                    action: "VIEW",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    provisionalId: {
	                        value: null,
	                        squash: true
	                    },
	                    provisionalIndex: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentUid: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentServiceId: {
	                        value: null,
	                        squash: true
	                    },
	                    consolUid: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    searchFlag: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'provisionalCostController',
	                templateUrl: 'app/components/finance/provisional_cost/view/provisional_cost_detail.html'
	            })

	            .state(
	                'layout.addProvisional', {
	                    url: '/finance/provisional/add/?fromHistory&shipmentId&shipmentServiceId&consolId&fromState&fromStateParams',
	                    params: {
	                        action: "CREATE",
	                        fromHistory: {
	                            value: null,
	                            squash: true
	                        },
	                        shipmentId: {
	                            value: null,
	                            squash: true
	                        },
	                        shipmentServiceId: {
	                            value: null,
	                            squash: true
	                        },
	                        consolId: {
	                            value: null,
	                            squash: true
	                        },
	                        fromState: {
	                            value: null,
	                            squash: true
	                        },
	                        fromStateParams: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'provisionalCostEditController',
	                    templateUrl: 'app/components/finance/provisional_cost/provisional_cost_edit.html'
	                })
	            .state(
	                'layout.editProvisional', {

	                    url: '/finance/provisional/edit/?provisionalId&fromHistory&shipmentId&shipmentServiceId&consolId&fromState&fromStateParams',
	                    params: {
	                        action: "EDIT",
	                        provisionalId: {
	                            value: null,
	                            squash: true
	                        },
	                        fromHistory: {
	                            value: null,
	                            squash: true
	                        },
	                        shipmentId: {
	                            value: null,
	                            squash: true
	                        },
	                        shipmentServiceId: {
	                            value: null,
	                            squash: true
	                        },
	                        consolId: {
	                            value: null,
	                            squash: true
	                        },
	                        fromState: {
	                            value: null,
	                            squash: true
	                        },
	                        fromStateParams: {
	                            value: null,
	                            squash: true
	                        }
	                    },


	                    controller: 'provisionalCostEditController',
	                    templateUrl: 'app/components/finance/provisional_cost/provisional_cost_edit.html'
	                })

	            .state(
	                'layout.provisionalCost', {
	                    url: '/finance/provisional?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'provisionalCostController',
	                    templateUrl: 'app/components/finance/provisional_cost/provisional_cost.html'
	                })
	            .state(
	                'layout.ShipmentSignOff', {
	                    url: '/crm/shipmentSignOff/view',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    controller: 'shipmentSignOffCtrl',
	                    templateUrl: '/app/components/finance/shipment_sign_off/shipment_sign_off.html'
	                })
	            .state('layout.errorMessage', {
	                url: '/setup/errormessage',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'errormsgCtrl',
	                templateUrl: '/app/components/setup/error_messages/error_messages.html'
	            })
	            .state(
	                'layout.addErrorMessage', {
	                    url: '/setup/errormessage/add',
	                    params: {
	                        action: "ADD"
	                    },
	                    controller: 'errormessage_edit_ctrl',
	                    templateUrl: '/app/components/setup/error_messages/error_message_edit.html'
	                }).state('layout.locationSetupWizard', {
	                url: '/setup/location_setup',
	                params: {},
	                controller: 'CompanyLocationWizardController',
	                templateUrl: 'app/components/setup/company_location_setup_wizard/location_setup_wizard.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad.load({
	                            name: 'NewAge',
	                            files: ['/app/components/setup/company_location_setup_wizard/location_setup_wizard.js',
	                                '/app/components/setup/company_location_setup_wizard/location_setup_wizard_factory.js'
	                            ]
	                        })
	                    }
	                }
	            }).state('layout.addAgentPort', {
	                url: '/setup/appconfiguration/agentport/add?tab',
	                params: {
	                    action: "ADD",
	                    tab: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'agentPortOperationCtrl',
	                templateUrl: 'app/components/setup/app_configuration/agent_port/agent_port_operation.html'
	            }).state('layout.addserviceMapping', {
	                url: '/setup/appconfiguration/servicemapping/add?tab',
	                params: {
	                    action: "ADD",
	                    tab: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ServiceMappingOperationCtrl',
	                templateUrl: 'app/components/setup/app_configuration/service_mapping/service_mapping_add.html'
	            }).state('layout.addEdiConfiguration', {
	                url: '/setup/appconfiguration/ediconfiguration/add?tab',
	                params: {
	                    action: "ADD",
	                    tab: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'EDIConfigOperationCtrl',
	                templateUrl: 'app/components/setup/app_configuration/edi_configuration/edi_config_add.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/app_configuration/edi_configuration/edi_config_operation.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addSurchargeMapping', {
	                url: '/setup/appconfiguration/surchargeMapping/add?tab',
	                params: {
	                    action: "ADD",
	                    tab: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'surchargeMappingOperationCtrl',
	                templateUrl: 'app/components/setup/app_configuration/sucharge_mapping/surcharge_mapping_operation.html'
	            })
	            .state('layout.appConfiguration', {
	                url: '/setup/appconfiguration?tab',
	                params: {
	                    action: "SEARCH",
	                    tab: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'app_config_ctrl',
	                templateUrl: '/app/components/setup/app_configuration/app_configuration.html'
	            })
	            .state(
	                'layout.addappConfiguration', {
	                    url: '/setup/appconfiguration/add?tab',
	                    params: {
	                        action: "ADD",
	                        tab: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'app_config_edit_ctrl',
	                    templateUrl: '/app/components/setup/app_configuration/app_configuration_edit.html'
	                })
	            .state('layout.RecordAccessLevel', {
	                url: '/setup/record_access_level',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'RecordAccessLevelController',
	                templateUrl: 'app/components/setup/record_access_levels-new/record_access_levels.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/record_access_levels-new/record_access_levels_factory.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_service.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_ctrl.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_edit_ctrl.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.viewRecordAccessLevel', {
	                url: '/setup/record_access_level/view/:id',
	                params: {
	                    action: "VIEW",
	                    id: null
	                },
	                controller: 'RecordAccessLevelController',
	                templateUrl: 'app/components/setup/record_access_levels-new/record_access_levels_view.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/record_access_levels-new/record_access_levels_factory.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_service.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_ctrl.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_edit_ctrl.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addRecordAccessLevel', {
	                url: '/setup/record_access_level/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'RecordAccessLevelOperationController',
	                templateUrl: 'app/components/setup/record_access_levels-new/record_access_levels_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/record_access_levels-new/record_access_levels_factory.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_service.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_ctrl.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_edit_ctrl.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.editRecordAccessLevel', {
	                url: '/setup/record_access_level/edit/:id',
	                params: {
	                    action: "EDIT",
	                    id: null
	                },
	                controller: 'RecordAccessLevelOperationController',
	                templateUrl: 'app/components/setup/record_access_levels-new/record_access_levels_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/record_access_levels-new/record_access_levels_factory.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_service.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_ctrl.js',
	                                    'app/components/setup/record_access_levels-new/record_access_levels_edit_ctrl.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state(
	                'layout.rolesPrivilege', {
	                    url: '/setup/roles_privileges/search',
	                    params: {
	                        action: "SEARCH"
	                    },
	                    controller: 'rolesCtrl',
	                    templateUrl: '/app/components/setup/roles_privileges/roles_privileges.html'
	                })
	            .state(
	                'layout.addRolesPrivilege', {
	                    url: '/setup/roles_privileges/add',
	                    params: {
	                        action: "ADD"
	                    },
	                    controller: 'rols_edit_Ctrl',
	                    templateUrl: '/app/components/setup/roles_privileges/edit_roles_privileges.html'
	                })
	            .state('layout.editRolesPrivilege', {
	                url: '/setup/roles_privileges/edit/:id/:fromHistory?nav_src_bkref_key&forObj&count&category&submitAction',
	                params: {
	                    action: "EDIT",
	                    module: "Role",
	                    id: null,
	                    fromHistory: null,
	                    nav_src_bkref_key: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: "0",
	                        squash: true
	                    },
	                    category: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'rols_edit_Ctrl',
	                templateUrl: '/app/components/setup/roles_privileges/edit_roles_privileges.html'

	            })
	            .state('layout.sequencegenerator', {
	                url: '/master/sequencegenerator/?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'SequenceGeneratorCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/setup/sequencegenerator/sequencegenerator-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorController.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorFactory.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorDataService.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.sequencegeneratorAdd', {
	                url: '/master/sequencegenerator/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Sequence Generator",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'SequenceGeneratorCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/setup/sequencegenerator/sequencegenerator-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorController.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorFactory.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorDataService.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.sequencegeneratorEdit', {
	                url: '/master/sequencegenerator/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Sequence Generator",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'SequenceGeneratorCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/setup/sequencegenerator/sequencegenerator-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorController.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorFactory.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorDataService.js',
	                                    'app/components/setup/sequencegenerator/sequenceGeneratorValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state(
	                'layout.airFlightPlan', {
	                    url: '/air/flightplan?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'flight_plan_Ctrl',
	                    templateUrl: 'app/components/air/flight_plan/flight_plan.html'
	                })
	            .state(
	                'layout.addFlightPlan', {
	                    url: '/air/flightplan/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'flightPlan_edit_Ctrl',
	                    templateUrl: 'app/components/air/flight_plan/edit_flight_plan.html'
	                })
	            .state(
	                'layout.editFlightPlan', {
	                    url: '/air/flightplan/edit/:flightplanId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        flightplanId: null,
	                        fromHistory: null
	                    },
	                    controller: 'flightPlan_edit_Ctrl',
	                    templateUrl: 'app/components/air/flight_plan/edit_flight_plan.html'
	                })
	            .state(
	                'layout.user', {
	                    url: '/master/user?submitAction',
	                    params: {
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        },
	                        action: "SEARCH"
	                    },
	                    controller: 'userCtrl',
	                    templateUrl: 'app/components/setup/users/user.html'
	                })
	            .state(
	                'layout.addUser', {
	                    url: '/master/user/add/:fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: null
	                    },
	                    controller: 'user_edit_Ctrl',
	                    templateUrl: 'app/components/setup/users/edit_user.html'
	                })
	            .state(
	                'layout.addNewState', {
	                    url: '/master/newState',
	                    params: {
	                        action: "Add",
	                        fromHistory: null
	                    },
	                    controller: 'countryOperationCtrl',
	                    templateUrl: 'app/components/master/country_master/add_state.html'
	                })
	            .state(
	                'layout.addNewCity', {
	                    url: '/master/newCity',
	                    params: {
	                        action: "Add",
	                        fromHistory: null
	                    },
	                    controller: 'countryOperationCtrl',
	                    templateUrl: 'app/components/master/country_master/add_city.html'
	                })
	            .state(
	                'layout.editUser', {
	                    url: '/master/user/edit/:userId/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        userId: null,
	                        fromHistory: null
	                    },
	                    controller: 'user_edit_Ctrl',
	                    templateUrl: 'app/components/setup/users/edit_user.html'
	                })

	            .state('layout.emailTemplate', {
	                url: '/emailtemplate',
	                controller: 'EmailTemplateCtrl',
	                params: {
	                    action: "SEARCH"
	                },
	                templateUrl: 'app/components/setup/email_template/email_template_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/email_template/email_template_controller.js',
	                                    'app/components/setup/email_template/email_template_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addEmailTemplate', {
	                url: '/emailtemplate/add',
	                controller: 'EmailTemplateOperation',
	                params: {
	                    action: "ADD"
	                },
	                templateUrl: 'app/components/setup/email_template/email_template_operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/email_template/email_template_operation.js',
	                                    'app/components/setup/email_template/email_template_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editEmailTemplate', {
	                url: '/emailtemplate/edit/:emailTemplateId',
	                controller: 'EmailTemplateOperation',
	                params: {
	                    action: "EDIT",
	                    emailTemplateId: null
	                },
	                templateUrl: 'app/components/setup/email_template/email_template_operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/email_template/email_template_operation.js',
	                                    'app/components/setup/email_template/email_template_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.countryDynamicField', {
	                url: '/setup/country/dynamicfields?submitAction&sortByColumn&orderByType&countryId&fieldName&screen&section',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    countryId: {
	                        value: null,
	                        squash: true
	                    },
	                    fieldName: {
	                        value: null,
	                        squash: true
	                    },
	                    screen: {
	                        value: null,
	                        squash: true
	                    },
	                    section: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'countryConfigCtrl',
	                templateUrl: '/app/components/setup/country/country_config_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/country/country_config_list.js',
	                                    'app/components/setup/country/country_config_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.viewCountryDynamicField', {
	                url: '/setup/country/dynamicfields/:id?submitAction&selectedPageNumber&count&recordPerPage&totalRecord&sortByColumn&orderByType&fromState&fromStateParams&countryId&fieldName&screen&section',
	                params: {
	                    action: "VIEW",
	                    id: null,
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    count: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    fromState: {
	                        value: null,
	                        squash: true
	                    },
	                    fromStateParams: {
	                        value: null,
	                        squash: true
	                    },
	                    countryId: {
	                        value: null,
	                        squash: true
	                    },
	                    fieldName: {
	                        value: null,
	                        squash: true
	                    },
	                    screen: {
	                        value: null,
	                        squash: true
	                    },
	                    section: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'countryConfigCtrl',
	                templateUrl: '/app/components/setup/country/country_config_detail.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/country/country_config_list.js',
	                                    'app/components/setup/country/country_config_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addCountryDynamicField', {
	                url: '/setup/country/dynamicfield/add?submitAction&fromHistory',
	                templateUrl: '/app/components/setup/country/edit_country_config.html',
	                controller: 'country_field_edit_Ctrl',
	                params: {
	                    action: "ADD",
	                    module: "Country Configuration",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/country/edit_country_config.js',
	                                    'app/components/setup/country/country_config_factory.js',
	                                    'app/components/setup/country/country_config_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editCountryDynamicField', {
	                url: '/setup/country/dynamicfield/edit/:id?submitAction&fromHistory',
	                templateUrl: '/app/components/setup/country/edit_country_config.html',
	                controller: 'country_field_edit_Ctrl',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Country Configuration",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/country/edit_country_config.js',
	                                    'app/components/setup/country/country_config_factory.js',
	                                    'app/components/setup/country/country_config_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.essentialList', {
	                url: '/master/essential/list?submitAction&fromHistory',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    forObj: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'essentialCtrl',
	                templateUrl: '/app/components/master/essential_charge/essential_list.html'
	            })
	            .state('layout.essentialChargeView', {
	                url: '/master/essential/view/:essentialChargeId?submitAction&fromHistory&essnIdx&chargeName&serviceName&originName&destinationName&tosName&crn&ppcc&routed&hazardous&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord',
	                params: {
	                    action: "VIEW",
	                    essentialChargeId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    essnIdx: {
	                        value: null,
	                        squash: true
	                    },
	                    chargeName: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceName: {
	                        value: null,
	                        squash: true
	                    },
	                    originName: {
	                        value: null,
	                        squash: true
	                    },
	                    destinationName: {
	                        value: null,
	                        squash: true
	                    },
	                    tosName: {
	                        value: null,
	                        squash: true
	                    },
	                    crn: {
	                        value: null,
	                        squash: true
	                    },
	                    ppcc: {
	                        value: null,
	                        squash: true
	                    },
	                    routed: {
	                        value: null,
	                        squash: true
	                    },
	                    hazardous: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'essentialCtrl',
	                templateUrl: '/app/components/master/essential_charge/essential_list.html'
	            })
	            .state(
	                'layout.essentialChargeAdd', {
	                    url: '/master/essential/add?submitAction&fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: {
	                            value: null,
	                            squash: true
	                        },
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'essential_edit_ctrl',
	                    templateUrl: '/app/components/master/essential_charge/edit_essential.html'
	                })
	            .state(
	                'layout.essentialChargeEdit', {
	                    url: '/master/essential/edit/:id/:fromHistory',
	                    params: {
	                        action: "EDIT",
	                        id: null,
	                        fromHistory: {
	                            value: null,
	                            squash: true
	                        },
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'essential_edit_ctrl',
	                    templateUrl: '/app/components/master/essential_charge/edit_essential.html'
	                })
	            .state('layout.docIssueRestriction', {
	                url: '/setup/docissuerestriction?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DocIssueRestrictionCtrl',
	                templateUrl: '/app/components/setup/document_issue_restriction/document_issue_restriction.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/setup/document_issue_restriction/docIssueRestrictionFactory.js',
	                                    '/app/components/setup/document_issue_restriction/documentIssueValidationService.js',
	                                    '/app/components/setup/document_issue_restriction/docIssueRestrictionController.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addDocIssueRestriction', {
	                url: '/setup/docissuerestriction/add?submitAction&fromHistory',
	                templateUrl: '/app/components/setup/document_issue_restriction/document_issue_restriction_edit.html',
	                controller: 'DocIssueRestrictionCtrl',
	                params: {
	                    action: "ADD",
	                    module: "Document Issue Restriction",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/setup/document_issue_restriction/docIssueRestrictionFactory.js',
	                                    '/app/components/setup/document_issue_restriction/documentIssueValidationService.js',
	                                    '/app/components/setup/document_issue_restriction/docIssueRestrictionController.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editDocIssueRestriction', {
	                url: '/setup/docissuerestriction/edit/:id?submitAction&fromHistory',
	                templateUrl: '/app/components/setup/document_issue_restriction/document_issue_restriction_edit.html',
	                controller: 'DocIssueRestrictionCtrl',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Document Issue Restriction",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/setup/document_issue_restriction/docIssueRestrictionFactory.js',
	                                    '/app/components/setup/document_issue_restriction/documentIssueValidationService.js',
	                                    '/app/components/setup/document_issue_restriction/docIssueRestrictionController.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.buyerconsolidation', {
	                url: '/master/buyer_consolidation_master?fromHistory&submitAction',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'buyerConsolidationCtrl',
	                templateUrl: 'app/components/master/buyer_consolidation/buyerconsolidation-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/buyer_consolidation/buyerConsolidation.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationFactory.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationDataService.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.buyerconsolidationAdd', {
	                url: '/master/buyer_consolidation/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Buyer Consolidation",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'buyerConsolidationCtrl',
	                templateUrl: 'app/components/master/buyer_consolidation/buyerconsolidation-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/buyer_consolidation/buyerConsolidation.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationFactory.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationDataService.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.buyerconsolidationEdit', {
	                url: '/master/buyer_consolidate/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Buyer Consolidation",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'buyerConsolidationCtrl',
	                templateUrl: 'app/components/master/buyer_consolidation/buyerconsolidation-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/buyer_consolidation/buyerConsolidation.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationFactory.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationDataService.js',
	                                    'app/components/master/buyer_consolidation/buyerConsolidationValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.commentMaster', {
	                url: '/master/comment_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'CommentMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/comment/comment_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/comment/commentMasterController.js',
	                                    'app/components/master/comment/commentMasterFactory.js',
	                                    'app/components/master/comment/commentMasterDataService.js',
	                                    'app/components/master/comment/commentMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.commentMasterAdd', {
	                url: '/master/comment/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Comment Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CommentMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/comment/comment_form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/comment/commentMasterController.js',
	                                    'app/components/master/comment/commentMasterFactory.js',
	                                    'app/components/master/comment/commentMasterDataService.js',
	                                    'app/components/master/comment/commentMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.commentMasterEdit', {
	                url: '/master/comment/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Comment Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CommentMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/comment/comment_form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/comment/commentMasterController.js',
	                                    'app/components/master/comment/commentMasterFactory.js',
	                                    'app/components/master/comment/commentMasterDataService.js',
	                                    'app/components/master/comment/commentMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.triggerMaster', {
	                url: '/master/trigger?submitAction&fromHistory',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'TriggerMasterCtrl',
	                templateUrl: 'app/components/master/trigger/trigger-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/trigger/triggerMasterController.js',
	                                    'app/components/master/trigger/triggerMasterFactory.js',
	                                    'app/components/master/trigger/triggerMasterDataService.js',
	                                    'app/components/master/trigger/triggerMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.serTaxCatMaster', {
	                url: '/master/servicetaxcategory_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'serTaxCatMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/servicetaxcategory/serviceTaxCategory-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterController.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterFactory.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterDataService.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.serTaxCatMasterAdd', {
	                url: '/master/servicetaxcategory_master/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "ServiceTaxCategoryMaster",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'serTaxCatMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/servicetaxcategory/serviceTaxCategory-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterController.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterFactory.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterDataService.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.serTaxCatMasterEdit', {
	                url: '/master/servicetaxcategory_master/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "ServiceTaxCategoryMaster",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'serTaxCatMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/servicetaxcategory/serviceTaxCategory-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterController.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterFactory.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterDataService.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.reasonMaster', {
	                url: '/master/reason_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'ReasonMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/reason/reason-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/reason/reasonMasterController.js',
	                                    'app/components/master/reason/reasonMasterFactory.js',
	                                    'app/components/master/reason/reasonMasterDataService.js',
	                                    'app/components/master/reason/reasonMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.reasonMasterAdd', {
	                url: '/master/reason/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Reason Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ReasonMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/reason/reason-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/reason/reasonMasterController.js',
	                                    'app/components/master/reason/reasonMasterFactory.js',
	                                    'app/components/master/reason/reasonMasterDataService.js',
	                                    'app/components/master/reason/reasonMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.reasonMasterEdit', {
	                url: '/master/reason/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Reason Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ReasonMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/reason/reason-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/reason/reasonMasterController.js',
	                                    'app/components/master/reason/reasonMasterFactory.js',
	                                    'app/components/master/reason/reasonMasterDataService.js',
	                                    'app/components/master/reason/reasonMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.triggerMasterAdd', {
	                url: '/master/trigger/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Trigger Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'TriggerMasterCtrl',
	                templateUrl: 'app/components/master/trigger/trigger-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/trigger/triggerMasterController.js',
	                                    'app/components/master/trigger/triggerMasterFactory.js',
	                                    'app/components/master/trigger/triggerMasterDataService.js',
	                                    'app/components/master/trigger/triggerMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.triggerMasterEdit', {
	                url: '/master/trigger/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Trigger Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'TriggerMasterCtrl',
	                templateUrl: 'app/components/master/trigger/trigger-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/trigger/triggerMasterController.js',
	                                    'app/components/master/trigger/triggerMasterFactory.js',
	                                    'app/components/master/trigger/triggerMasterDataService.js',
	                                    'app/components/master/trigger/triggerMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.triggerTypeMaster', {
	                url: '/master/triggertype?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'TriggerTypeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/trigger_type/trigger-type-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/trigger_type/triggerTypeMasterController.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterFactory.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterDataService.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.triggerTypeMasterAdd', {
	                url: '/master/triggertype/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "TriggerType Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'TriggerTypeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/trigger_type/trigger-type-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/trigger_type/triggerTypeMasterController.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterFactory.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterDataService.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.triggerTypeMasterEdit', {
	                url: '/master/triggertype/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "TriggerType Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'TriggerTypeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/trigger_type/trigger-type-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/trigger_type/triggerTypeMasterController.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterFactory.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterDataService.js',
	                                    'app/components/master/trigger_type/triggerTypeMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.generalnotemaster', {
	                url: '/master/generalnote_master/?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'GeneralNoteMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/general_note/generalnote-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/general_note/generalNoteMasterController.js',
	                                    'app/components/master/general_note/generalNoteMasterFactory.js',
	                                    'app/components/master/general_note/generalNoteMasterDataService.js',
	                                    'app/components/master/general_note/generalNoteMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.generalnotemasterAdd', {
	                url: '/master/generalnote_master/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "GeneralNote Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'GeneralNoteMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/general_note/generalnote-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/general_note/generalNoteMasterController.js',
	                                    'app/components/master/general_note/generalNoteMasterFactory.js',
	                                    'app/components/master/general_note/generalNoteMasterDataService.js',
	                                    'app/components/master/general_note/generalNoteMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.generalnotemasterEdit', {
	                url: '/master/generalnote_master/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "STC Group Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'GeneralNoteMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/general_note/generalnote-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/general_note/generalNoteMasterController.js',
	                                    'app/components/master/general_note/generalNoteMasterFactory.js',
	                                    'app/components/master/general_note/generalNoteMasterDataService.js',
	                                    'app/components/master/general_note/generalNoteMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.gradeMaster', {
	                url: '/master/grade',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'GradeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/grade/grade-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/grade/gradeMasterController.js',
	                                    'app/components/master/grade/gradeMasterFactory.js',
	                                    'app/components/master/grade/gradeMasterDataService.js',
	                                    'app/components/master/grade/gradeMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.gradeMasterAdd', {
	                url: '/master/grade/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Grade Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'GradeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/grade/grade-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/grade/gradeMasterController.js',
	                                    'app/components/master/grade/gradeMasterFactory.js',
	                                    'app/components/master/grade/gradeMasterDataService.js',
	                                    'app/components/master/grade/gradeMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.gradeMasterEdit', {
	                url: '/master/grade/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Grade Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'GradeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/grade/grade-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/grade/gradeMasterController.js',
	                                    'app/components/master/grade/gradeMasterFactory.js',
	                                    'app/components/master/grade/gradeMasterDataService.js',
	                                    'app/components/master/grade/gradeMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.divisionMaster', {
	                url: '/master/division?submitAction&fromHistory',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DivisionMasterCtrl',
	                templateUrl: 'app/components/master/division/division_master.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/division/division_master_ctrl.js',
	                                    'app/components/master/division/division_master_operation_ctrl.js',
	                                    'app/components/master/division/division_factory.js',
	                                    'app/components/master/division/divsion_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.divisionMasterAdd', {
	                url: '/master/division/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DivisionMasterOperationCtrl',
	                templateUrl: 'app/components/master/division/division_master_operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/division/division_master_ctrl.js',
	                                    'app/components/master/division/division_master_operation_ctrl.js',
	                                    'app/components/master/division/division_factory.js',
	                                    'app/components/master/division/divsion_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.divisionMasterEdit', {
	                url: '/master/division/edit/:id?submitAction&fromHistory',
	                params: {
	                    action: "EDIT",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DivisionMasterOperationCtrl',
	                templateUrl: 'app/components/master/division/division_master_operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/division/division_master_ctrl.js',
	                                    'app/components/master/division/division_master_operation_ctrl.js',
	                                    'app/components/master/division/division_factory.js',
	                                    'app/components/master/division/divsion_service.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.zoneMaster', {
	                url: '/master/zone',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ZoneMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/zone/zone-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/zone/zoneMasterController.js',
	                                    'app/components/master/zone/zoneMasterFactory.js',
	                                    'app/components/master/zone/zoneMasterDataService.js',
	                                    'app/components/master/zone/zoneMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.zoneMasterAdd', {
	                url: '/master/zone/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Zone Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ZoneMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/zone/zone-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/zone/zoneMasterController.js',
	                                    'app/components/master/zone/zoneMasterFactory.js',
	                                    'app/components/master/zone/zoneMasterDataService.js',
	                                    'app/components/master/zone/zoneMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.zoneMasterEdit', {
	                url: '/master/zone/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Zone Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ZoneMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/zone/zone-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/zone/zoneMasterController.js',
	                                    'app/components/master/zone/zoneMasterFactory.js',
	                                    'app/components/master/zone/zoneMasterDataService.js',
	                                    'app/components/master/zone/zoneMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.defaultMaster', {
	                url: '/master/default?submitAction',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DefaultMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/default/default.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/default/defaultMasterController.js',
	                                    'app/components/master/default/defaultMasterFactory.js',
	                                    'app/components/master/software/softwareMasterFactory.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/default/defaultMasterDataService.js',
	                                    'app/components/master/default/defaultMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.defaultMasterView', {
	                url: '/master/default/:id/?searchDefaultCode&searchDefaultName&searchValue&searchSoftware&searchGroup&searchSubGroup&searchScopeFlag&currIdx&&sortByColumn&&orderByType&selectedPageNumber&recordPerPage&totalRecord',
	                params: {
	                    id: null,
	                    action: "VIEW",
	                    module: "Default Master",
	                    currIdx: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    searchDefaultCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchDefaultName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchValue: {
	                        value: null,
	                        squash: true
	                    },
	                    searchSoftware: {
	                        value: null,
	                        squash: true
	                    },
	                    searchGroup: {
	                        value: null,
	                        squash: true
	                    },
	                    searchSubGroup: {
	                        value: null,
	                        squash: true
	                    },
	                    searchScopeFlag: {
	                        value: null,
	                        squash: true
	                    }

	                },
	                controller: 'DefaultMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/default/default-view.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/default/defaultMasterController.js',
	                                    'app/components/master/default/defaultMasterFactory.js',
	                                    'app/components/master/software/softwareMasterFactory.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js', 'app/components/master/default/defaultMasterDataService.js',
	                                    'app/components/master/default/defaultMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.defaultMasterAdd', {
	                url: '/master/default/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Default Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DefaultMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/default/default-operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/default/defaultMasterController.js',
	                                    'app/components/master/default/defaultMasterFactory.js',
	                                    'app/components/master/software/softwareMasterFactory.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/default/defaultMasterDataService.js',
	                                    'app/components/master/default/defaultMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.defaultMasterEdit', {
	                url: '/master/default/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Default Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DefaultMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/default/default-operation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/default/defaultMasterController.js',
	                                    'app/components/master/default/defaultMasterFactory.js',
	                                    'app/components/master/software/softwareMasterFactory.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/default/defaultMasterDataService.js',
	                                    'app/components/master/default/defaultMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.softwareMaster', {
	                url: '/master/software?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'SoftwareMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/software/software-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/software/softwareMasterController.js',
	                                    'app/components/master/software/softwareMasterFactory.js',
	                                    'app/components/master/software/softwareMasterDataService.js',
	                                    'app/components/master/software/softwareMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.softwareMasterAdd', {
	                url: '/master/software/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "software Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'SoftwareMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/software/software-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/software/softwareMasterController.js',
	                                    'app/components/master/software/softwareMasterFactory.js',
	                                    'app/components/master/software/softwareMasterDataService.js',
	                                    'app/components/master/software/softwareMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.softwareMasterEdit', {
	                url: '/master/software/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "software Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'SoftwareMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/software/software-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/software/softwareMasterController.js',
	                                    'app/components/master/software/softwareMasterFactory.js',
	                                    'app/components/master/software/softwareMasterDataService.js',
	                                    'app/components/master/software/softwareMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.objectSubGroupMaster', {
	                url: '/master/objectsubgroup?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ObjectSubGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/object_sub_group/object-sub-group-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/object_sub_group/objectSubGroupMasterController.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterDataService.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.objectSubGroupMasterAdd', {
	                url: '/master/objectsubgroup/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Object SubGroup Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ObjectSubGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/object_sub_group/object-sub-group-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/object_sub_group/objectSubGroupMasterController.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterDataService.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.objectSubGroupMasterEdit', {
	                url: '/master/objectsubgroup/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Object SubGroup Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ObjectSubGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/object_sub_group/object-sub-group-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/object_sub_group/objectSubGroupMasterController.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterDataService.js',
	                                    'app/components/master/object_sub_group/objectSubGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.objectGroupMaster', {
	                url: '/master/objectgroup?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ObjectGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/object_group/object-group-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/object_group/objectGroupMasterController.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterDataService.js',
	                                    'app/components/master/object_group/objectGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.objectGroupMasterAdd', {
	                url: '/master/objectgroup/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "ObjectGroup Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ObjectGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/object_group/object-group-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/object_group/objectGroupMasterController.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterDataService.js',
	                                    'app/components/master/object_group/objectGroupMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.objectGroupMasterEdit', {
	                url: '/master/objectgroup/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "ObjectGroup Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ObjectGroupMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/object_group/object-group-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/object_group/objectGroupMasterController.js',
	                                    'app/components/master/object_group/objectGroupMasterFactory.js',
	                                    'app/components/master/object_group/objectGroupMasterDataService.js',
	                                    'app/components/master/object_group/objectGroupMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.valueAddedServices', {
	                url: '/master/valueaddedservices?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ValueAddedServicesCtrl',
	                templateUrl: 'app/components/master/value_added_services/value-added-services-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesController.js',
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                    'app/components/master/value_added_services/valueAddedServicesDataService.js',
	                                    'app/components/master/value_added_services/valueAddedServicesValidationService.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.valueAddedServicesAdd', {
	                url: '/master/valueaddedservices/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Value Added Services",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ValueAddedServicesCtrl',
	                templateUrl: 'app/components/master/value_added_services/value-added-servies-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesController.js',
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                    'app/components/master/value_added_services/valueAddedServicesDataService.js',
	                                    'app/components/master/value_added_services/valueAddedServicesValidationService.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.valueAddedServicesEdit', {
	                url: '/master/valueaddedservices/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Value Added Services",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'ValueAddedServicesCtrl',
	                templateUrl: 'app/components/master/value_added_services/value-added-servies-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/value_added_services/valueAddedServicesController.js',
	                                    'app/components/master/value_added_services/valueAddedServicesFactory.js',
	                                    'app/components/master/value_added_services/valueAddedServicesDataService.js',
	                                    'app/components/master/value_added_services/valueAddedServicesValidationService.js',
	                                    'app/components/master/servicetaxcategory/serviceTaxCategoryMasterFactory.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.employee', {
	                url: '/master/employee?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'EmployeeController',
	                templateUrl: 'app/components/master/employee/employee_master_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/employee/employee_master_ctrl.js',
	                                    'app/components/master/employee/employee_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addEmployee', {
	                url: '/master/employee/add?fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'EmployeeEditController',
	                templateUrl: 'app/components/master/employee/employee_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/employee/employee_edit_ctrl.js',
	                                    'app/components/master/employee/employee_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.viewEmployee', {
	                url: '/master/employee/:employeeId?searchEmployeeCode&searchEmployeeName&searchAliasName&searchEmployeeStatus&searchIsSalesman&searchEmail&searchPhoneNumber&sortByColumn&orderByType&selectedPageNumber&recordPerPage&totalRecord&',
	                params: {
	                    action: "VIEW",
	                    employeeId: null,
	                    employeeIndex: null,
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    searchEmployeeCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchEmployeeName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchAliasName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchEmployeeStatus: {
	                        value: null,
	                        squash: true
	                    },
	                    searchIsSalesman: {
	                        value: null,
	                        squash: true
	                    },
	                    searchEmail: {
	                        value: null,
	                        squash: true
	                    },
	                    searchPhoneNumber: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'EmployeeController',
	                templateUrl: 'app/components/master/employee/employee_master_view.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: ['app/components/master/employee/employee_factory.js',
	                                    'app/components/master/employee/employee_master_ctrl.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.editEmployee', {
	                url: '/master/employee/edit/:employeeId?fromHistory',
	                params: {
	                    employeeId: null,
	                    action: "EDIT",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'EmployeeEditController',
	                templateUrl: 'app/components/master/employee/employee_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/employee/employee_edit_ctrl.js',
	                                    'app/components/master/employee/employee_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })


	            .state('layout.countryMaster', {
	                url: '/master/country?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CountryMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/country/country-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/country/countryMasterController.js',
	                                    'app/components/master/country/countryMasterDataService.js',
	                                    'app/components/master/country/countryMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.countryMasterView', {
	                url: '/master/country/:id/?submitAction&currIdx&searchStatus&sortByColumn&searchCountryCode&searchNationality&searchWeightOrCbm&searchCountryName&orderByType&selectedPageNumber&recordPerPage&totalRecord',
	                params: {
	                    id: null,
	                    action: "VIEW",
	                    module: "Country Master",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                    currIdx: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCountryName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCountryCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchNationality: {
	                        value: null,
	                        squash: true
	                    },
	                    searchWeightOrCbm: {
	                        value: null,
	                        squash: true
	                    },
	                    searchStatus: {
	                        value: null,
	                        squash: true
	                    },
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CountryMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/country/country.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/country/countryMasterController.js',
	                                    'app/components/master/country/countryMasterDataService.js',
	                                    'app/components/master/country/countryMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.countryMasterAdd', {
	                url: '/master/country/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Country Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CountryMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/country/country-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/country/countryMasterController.js',
	                                    'app/components/master/country/countryMasterDataService.js',
	                                    'app/components/master/country/countryMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.countryMasterEdit', {
	                url: '/master/country/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Country Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CountryMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/country/country-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/country/countryMasterController.js',
	                                    'app/components/master/country/countryMasterDataService.js',
	                                    'app/components/master/country/countryMasterValidationService.js'

	                                ]
	                            })
	                    }
	                }
	            }).state('layout.city', {
	                url: '/master/city?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'cityMasterController',
	                templateUrl: 'app/components/master/city/city_master.html'
	            })
	            .state('layout.addCity', {
	                url: '/master/city/add?fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'cityMasterOperationCtrl',
	                templateUrl: 'app/components/master/city/city_master_operation.html'
	            })
	            .state('layout.editCity', {
	                url: '/master/city/edit/:cityId&fromHistory',
	                params: {
	                    action: "EDIT",
	                    cityId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'cityMasterOperationCtrl',
	                templateUrl: 'app/components/master/city/city_master_operation.html'
	            })
	            .state('layout.state', {
	                url: '/master/state?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'stateMasterController',
	                templateUrl: 'app/components/master/state/state_master.html'
	            })
	            .state('layout.addState', {
	                url: '/master/state/add?fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                },
	                controller: 'stateMasterOperationCtrl',
	                templateUrl: 'app/components/master/state/state_master_operation.html'
	            })
	            .state('layout.editState', {
	                url: '/master/state/edit/:stateId&fromHistory',
	                params: {
	                    action: "EDIT",
	                    stateId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'stateMasterOperationCtrl',
	                templateUrl: 'app/components/master/state/state_master_operation.html'
	            })
	            .state('layout.bankMaster', {
	                url: '/master/bank_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'bankMasterController',
	                templateUrl: 'app/components/master/bank/bank-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/bank/bankMasterController.js',
	                                    'app/components/master/bank/bankMasterFactory.js',
	                                    'app/components/master/bank/bankMasterService.js',
	                                    'app/components/master/bank/bankMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.bankMasterEdit', {
	                url: '/master/bank_master/edit',
	                params: {
	                    action: "EDIT"
	                },
	                controller: 'bankMasterController',
	                templateUrl: 'app/components/master/bank/bank.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/bank/bankMasterController.js',
	                                    'app/components/master/bank/bankMasterFactory.js',
	                                    'app/components/master/bank/bankMasterService.js',
	                                    'app/components/master/bank/bankMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.bankMasterAdd', {
	                url: '/master/bank_master/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'bankMasterController',
	                templateUrl: 'app/components/master/bank/bank.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/bank/bankMasterController.js',
	                                    'app/components/master/bank/bankMasterFactory.js',
	                                    'app/components/master/bank/bankMasterService.js',
	                                    'app/components/master/bank/bankMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.eventMaster', {
	                url: '/master/event_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'eventMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/event/event_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/event/event_controller.js',
	                                    'app/components/master/event/event_factory.js',
	                                    'app/components/master/event/event_service.js',
	                                    'app/components/master/event/event_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.eventMasterEdit', {
	                url: '/master/event_master/edit/:id',
	                params: {
	                    action: "EDIT",
	                    id: null
	                },
	                controller: 'eventMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/event/event_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/event/event_factory.js',
	                                    'app/components/master/event/event_controller.js',
	                                    'app/components/master/event/event_service.js',
	                                    'app/components/master/event/event_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.eventMasterAdd', {	            	
	                url: '/master/event_master/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'eventMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/event/event_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/event/event_factory.js',
	                                    'app/components/master/event/event_controller.js',
	                                    'app/components/master/event/event_service.js',
	                                    'app/components/master/event/event_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.vesselMaster', {
	                url: '/master/vessel_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'vesselMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/vessel/vessel_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                	'app/components/master/vessel/vessel_factory.js',
	                                	'app/components/master/vessel/vessel_controller.js',
	                                	'app/components/master/vessel/vessel_service.js',
	                                    'app/components/master/vessel/vessel_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.vesselMasterAdd', {
	            	
	                url: '/master/vessel_master/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'vesselMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/vessel/vessel_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                	'app/components/master/vessel/vessel_factory.js',
	                                	'app/components/master/vessel/vessel_controller.js',
	                                	'app/components/master/vessel/vessel_service.js',
	                                    'app/components/master/vessel/vessel_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.vesselMasterEdit', {
	                url: '/master/vessel_master/edit/:id',
	                params: {
	                    action: "EDIT",
	                    id: null
	                },
	                controller: 'vesselMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/vessel/vessel_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/vessel/vessel_factory.js',
	                                    'app/components/master/vessel/vessel_controller.js',
	                                    'app/components/master/vessel/vessel_service.js',
	                                    'app/components/master/vessel/vessel_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.containerMaster', {
	                url: '/master/container_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'containerMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/container/container_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                	'app/components/master/container/container_factory.js',
	                                	'app/components/master/container/container_controller.js',
	                                	'app/components/master/container/container_service.js',
	                                    'app/components/master/container/container_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.containerMasterAdd', {
	            	
	                url: '/master/container_master/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'containerMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/container/container_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                	'app/components/master/container/container_factory.js',
	                                	'app/components/master/container/container_controller.js',
	                                	'app/components/master/container/container_service.js',
	                                    'app/components/master/container/container_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.containerMasterEdit', {
	                url: '/master/container_master/edit/:id',
	                params: {
	                    action: "EDIT",
	                    id: null
	                },
	                controller: 'containerMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/container/container_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/container/container_factory.js',
	                                    'app/components/master/container/container_controller.js',
	                                    'app/components/master/container/container_service.js',
	                                    'app/components/master/container/container_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.itemMaster', {
	                url: '/master/item_master',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'itemMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/item/item_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                	'app/components/master/item/item_factory.js',
	                                	'app/components/master/item/item_controller.js',
	                                	'app/components/master/item/item_service.js',
	                                    'app/components/master/item/item_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.itemMasterAdd', {
	            	
	                url: '/master/item_master/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'itemMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/item/item_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                	'app/components/master/item/item_factory.js',
	                                	'app/components/master/item/item_controller.js',
	                                	'app/components/master/item/item_service.js',
	                                    'app/components/master/item/item_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.itemMasterEdit', {
	                url: '/master/item_master/edit/:id',
	                params: {
	                    action: "EDIT",
	                    id: null
	                },
	                controller: 'itemMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/item/item_operational.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/item/item_factory.js',
	                                    'app/components/master/item/item_controller.js',
	                                    'app/components/master/item/item_service.js',
	                                    'app/components/master/item/item_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state(
	                'layout.regionMaster', {
	                    url: '/master/region_master?submitAction',
	                    params: {
	                        action: "SEARCH",
	                        submitAction: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'regionMasterController',
	                    templateUrl: 'app/components/master/region/region-list.html',
	                    resolve: {
	                        loadMyFiles: function($ocLazyLoad) {
	                            return $ocLazyLoad
	                                .load({
	                                    name: 'NewAge',
	                                    files: [
	                                        'app/components/master/region/regionMasterController.js',
	                                        'app/components/master/region/regionMasterFactory.js',
	                                        'app/components/master/region/regionMasterService.js',
	                                        'app/components/master/region/regionMasterValidationService.js'
	                                    ]
	                                })
	                        }
	                    }
	                }).state(
	                'layout.regionMasterEdit', {
	                    url: '/master/region_master/edit/:id&fromHistory',
	                    params: {
	                        action: "EDIT",
	                        id: null,
	                        fromHistory: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'regionMasterController',
	                    templateUrl: 'app/components/master/region/region.html',
	                    resolve: {
	                        loadMyFiles: function($ocLazyLoad) {
	                            return $ocLazyLoad
	                                .load({
	                                    name: 'NewAge',
	                                    files: [
	                                        'app/components/master/region/regionMasterController.js',
	                                        'app/components/master/region/regionMasterFactory.js',
	                                        'app/components/master/region/regionMasterService.js',
	                                        'app/components/master/region/regionMasterValidationService.js'
	                                    ]
	                                })
	                        }
	                    }
	                }).state(
	                'layout.regionMasterAdd', {
	                    url: '/master/region_master/add?fromHistory',
	                    params: {
	                        action: "ADD",
	                        fromHistory: {
	                            value: null,
	                            squash: true
	                        }
	                    },
	                    controller: 'regionMasterController',
	                    templateUrl: 'app/components/master/region/region.html',
	                    resolve: {
	                        loadMyFiles: function($ocLazyLoad) {
	                            return $ocLazyLoad
	                                .load({
	                                    name: 'NewAge',
	                                    files: [
	                                        'app/components/master/region/regionMasterController.js',
	                                        'app/components/master/region/regionMasterFactory.js',
	                                        'app/components/master/region/regionMasterService.js',
	                                        'app/components/master/region/regionMasterValidationService.js'
	                                    ]
	                                })
	                        }
	                    }
	                })
	            .state('layout.cfsMaster', {
	                url: '/master/cfs',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'CFSMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/cfs_master/cfs-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/cfs_master/cfsMasterController.js',
	                                    'app/components/master/cfs_master/cfsMasterFactory.js',
	                                    'app/components/master/cfs_master/cfsMasterDataService.js',
	                                    'app/components/master/cfs_master/cfsMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.cfsMasterAdd', {
	                url: '/master/cfs/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "CFS Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CFSMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/cfs_master/cfs-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/cfs_master/cfsMasterController.js',
	                                    'app/components/master/cfs_master/cfsMasterFactory.js',
	                                    'app/components/master/cfs_master/cfsMasterDataService.js',
	                                    'app/components/master/cfs_master/cfsMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.cfsMasterEdit', {
	                url: '/master/cfs/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "CFS Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'CFSMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/cfs_master/cfs-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/cfs_master/cfsMasterController.js',
	                                    'app/components/master/cfs_master/cfsMasterFactory.js',
	                                    'app/components/master/cfs_master/cfsMasterDataService.js',
	                                    'app/components/master/cfs_master/cfsMasterValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.locationMaster', {
	                url: '/setup/locationMaster',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'LocationMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/setup/location_master/location-list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/location_master/location_master_ctrl.js',
	                                    'app/components/setup/location_master/location_master_factory.js',
	                                    'app/components/setup/location_master/location_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.locationMasterView', {
	                url: '/setup/locationMaster/view/:id?submitAction&index&totalRecord&sortByColumn&orderByType&selectedPageNumber&recordPerPage&searchCode&searchName&searchCompanyName&searchBranchName&searchCountryName&searchStatus&fromHistory',
	                params: {
	                    id: null,
	                    index: null,
	                    action: "VIEW",
	                    module: "Location Master",
	                    sortByColumn: {
	                        value: null,
	                        squash: true
	                    },
	                    orderByType: {
	                        value: null,
	                        squash: true
	                    },
	                    selectedPageNumber: {
	                        value: null,
	                        squash: true
	                    },
	                    recordPerPage: {
	                        value: null,
	                        squash: true
	                    },
	                    totalRecord: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCode: {
	                        value: null,
	                        squash: true
	                    },
	                    searchName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCompanyName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchBranchName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchCountryName: {
	                        value: null,
	                        squash: true
	                    },
	                    searchStatus: {
	                        value: null,
	                        squash: true
	                    },
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'LocationMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/setup/location_master/location_details.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/location_master/location_master_ctrl.js',
	                                    'app/components/setup/location_master/location_master_factory.js',
	                                    'app/components/setup/location_master/location_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.locationMasterAdd', {
	                url: '/setup/locationMaster/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Location Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'LocationMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/setup/location_master/location_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/location_master/location_master_ctrl.js',
	                                    'app/components/setup/location_master/location_master_factory.js',
	                                    'app/components/setup/location_master/location_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.locationMasterEdit', {
	                url: '/setup/locationMaster/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Location Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'LocationMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/setup/location_master/location_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/location_master/location_master_ctrl.js',
	                                    'app/components/setup/location_master/location_master_factory.js',
	                                    'app/components/setup/location_master/location_master_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.documentTypeMaster', {
	                url: '/master/documentType',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'DocumentTypeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/document_type/document_type_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/document_type/document_type_ctrl.js',
	                                    'app/components/master/document_type/document_type_factory.js',
	                                    'app/components/master/document_type/document_type_data_service.js',
	                                    'app/components/master/document_type/document_type_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.documentTypeMasterAdd', {
	                url: '/master/documentType/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Document Type Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DocumentTypeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/document_type/document_type_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/document_type/document_type_ctrl.js',
	                                    'app/components/master/document_type/document_type_factory.js',
	                                    'app/components/master/document_type/document_type_data_service.js',
	                                    'app/components/master/document_type/document_type_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.documentTypeMasterEdit', {
	                url: '/master/documentType/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Document Type Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DocumentTypeMasterCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/document_type/document_type_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/document_type/document_type_ctrl.js',
	                                    'app/components/master/document_type/document_type_factory.js',
	                                    'app/components/master/document_type/document_type_data_service.js',
	                                    'app/components/master/document_type/document_type_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.aesFilerMaster', {
	                url: '/master/aesFiler?fromHistory&submitAction',
	                params: {
	                    action: "SEARCH",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'AesFilerMasterCtrl',
	                controllerAs: 'afm',
	                templateUrl: 'app/components/master/aes_filer_master/aes_filer_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/aes_filer_master/aes_filer_master_ctrl.js',
	                                    'app/components/master/aes_filer_master/aes_filer_factory.js',
	                                    'app/components/master/aes_filer_master/aes_filer_data_service.js',
	                                    'app/components/master/aes_filer_master/aes_filer_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.aesFilerMasterAdd', {
	                url: '/master/aesFiler/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Aes Filer Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'AesFilerMasterCtrl',
	                controllerAs: 'afm',
	                templateUrl: 'app/components/master/aes_filer_master/aes_filer_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/aes_filer_master/aes_filer_master_ctrl.js',
	                                    'app/components/master/aes_filer_master/aes_filer_factory.js',
	                                    'app/components/master/aes_filer_master/aes_filer_data_service.js',
	                                    'app/components/master/aes_filer_master/aes_filer_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.aesFilerMasterEdit', {
	                url: '/master/aesFiler/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Aes Filer Master",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'AesFilerMasterCtrl',
	                controllerAs: 'afm',
	                templateUrl: 'app/components/master/aes_filer_master/aes_filer_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/aes_filer_master/aes_filer_master_ctrl.js',
	                                    'app/components/master/aes_filer_master/aes_filer_factory.js',
	                                    'app/components/master/aes_filer_master/aes_filer_data_service.js',
	                                    'app/components/master/aes_filer_master/aes_filer_validation_service.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.department', {
	                url: '/master/department?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DepartmentMasterCtrl',
	                templateUrl: 'app/components/master/department/department.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/department/department_ctrl.js',
	                                    'app/components/master/department/department_factory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.addDepartment', {
	                url: '/master/department/add?fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DepartmentMasterEditCtrl',
	                templateUrl: 'app/components/master/department/department_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/department/department_edit_ctrl.js',
	                                    'app/components/master/department/department_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editDepartment', {
	                url: '/master/department/edit?departmentId&fromHistory',
	                params: {
	                    action: "EDIT",
	                    departmentId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DepartmentMasterEditCtrl',
	                templateUrl: 'app/components/master/department/department_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/department/department_edit_ctrl.js',
	                                    'app/components/master/department/department_factory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.designation', {
	                url: '/master/designation?submitAction',
	                params: {
	                    action: "SEARCH",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DesignationMasterCtrl',
	                templateUrl: 'app/components/master/designation/designation.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/designation/designation_ctrl.js',
	                                    'app/components/master/designation/designation_factory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.addDesignation', {
	                url: '/master/designation/add?fromHistory',
	                params: {
	                    action: "ADD",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DesignationMasterEditCtrl',
	                templateUrl: 'app/components/master/designation/designation_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/designation/designation_edit_ctrl.js',
	                                    'app/components/master/designation/designation_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.editDesignation', {
	                url: '/master/designation/edit?designationId&fromHistory',
	                params: {
	                    action: "EDIT",
	                    designationId: null,
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'DesignationMasterEditCtrl',
	                templateUrl: 'app/components/master/designation/designation_edit.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/designation/designation_edit_ctrl.js',
	                                    'app/components/master/designation/designation_factory.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.myTask', {
	                url: '/mytask?submitAction',
	                controller: 'taskDashboardCtrl',
	                controllerAs: 'vm',
	                params: {
	                    action: "Count",
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                templateUrl: 'app/components/task/task-dashboard.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/task/taskDashboardController.js'
	                                ]
	                            })
	                    }
	                }
	            })

	            .state('layout.myIndividualAirExportTask', {
	                url: '/myAirExportTask?activeTab&shipmentId,&serviceName',
	                controller: 'taskAirExportCtrl',
	                controllerAs: 'vm',
	                params: {
	                    action: "Search",
	                    activeTab: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentId: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceName:{
	                    	value: null,
	                        squash: true
	                    }
	                },
	                templateUrl: 'app/components/task/airexport/task_airexport.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/task/airexport/taskAirExportController.js',
	                                    'app/components/task/airexport/taskAirExportDataService.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.myIndividualAirImportTask', {
	                url: '/myAirImportTask?activeTab&shipmentId,&serviceName',
	                controller: 'taskAirImportCtrl',
	                controllerAs: 'vm',
	                params: {
	                    action: "Search",
	                    activeTab: {
	                        value: null,
	                        squash: true
	                    },
	                    shipmentId: {
	                        value: null,
	                        squash: true
	                    },
	                    serviceName:{
	                    	value: null,
	                        squash: true
	                    }
	                },
	                templateUrl: 'app/components/task/airimport/task_airimport.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/task/airimport/taskAirImportController.js',
	                                    'app/components/task/airimport/taskAirImportDataService.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.countryReportConfigAdd', {
	                url: '/master/countryreportconfig/add?submitAction&fromHistory',
	                params: {
	                    action: "ADD",
	                    module: "Country Report Config",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'countryReportConfigCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/countryreportconfig/countryreportconfig-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/countryreportconfig/countryReportConfigController.js',
	                                    'app/components/master/countryreportconfig/countryReportConfigFactory.js',
	                                    'app/components/master/countryreportconfig/countryReportConfigDataService.js',
	                                    'app/components/master/countryreportconfig/countryReportConfigValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.countryReportConfigEdit', {
	                url: '/master/countryreportconfig/edit/:id?submitAction&fromHistory',
	                params: {
	                    id: null,
	                    action: "EDIT",
	                    module: "Country Report Config",
	                    fromHistory: {
	                        value: null,
	                        squash: true
	                    },
	                    submitAction: {
	                        value: null,
	                        squash: true
	                    }
	                },
	                controller: 'countryReportConfigCtrl',
	                controllerAs: 'vm',
	                templateUrl: 'app/components/master/countryreportconfig/countryreportconfig-form.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/countryreportconfig/countryReportConfigController.js',
	                                    'app/components/master/countryreportconfig/countryReportConfigFactory.js',
	                                    'app/components/master/countryreportconfig/countryReportConfigDataService.js',
	                                    'app/components/master/countryreportconfig/countryReportConfigValidationService.js'
	                                ]
	                            })
	                    }
	                }
	            })
	            .state('layout.addReportMaster', {
	                url: '/setup/reportmaster/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'report_master_ctrl',
	                templateUrl: 'app/components/setup/reportmaster/view/report_master_opertaional.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/reportmaster/report_master_ctrl.js',
	                                    'app/components/setup/reportmaster/report_factory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.reportMaster', {
	                url: '/setup/reportmaster/',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'report_master_ctrl',
	                templateUrl: 'app/components/setup/reportmaster/view/report_master_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/setup/reportmaster/report_master_ctrl.js',
	                                    'app/components/setup/reportmaster/report_factory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.addDocumentMaster', {
	                url: '/master/documentmaster/add',
	                params: {
	                    action: "ADD"
	                },
	                controller: 'document_master_ctrl',
	                templateUrl: 'app/components/master/documentmaster/view/document_master_opertaional.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/documentmaster/document_master_ctrl.js',
	                                    'app/components/master/documentmaster/document_factory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.documentMaster', {
	                url: '/master/documentmaster/',
	                params: {
	                    action: "SEARCH"
	                },
	                controller: 'document_master_ctrl',
	                templateUrl: 'app/components/master/documentmaster/view/document_master_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    'app/components/master/documentmaster/document_master_ctrl.js',
	                                    'app/components/master/documentmaster/document_factory.js'
	                                ]
	                            })
	                    }
	                }
	            }).state('layout.winstatus', {
	                url: '/air/winstatus',
	                params: {
	                    action: "LIST",
	                    module: "Win"
	                },
	                controller: 'winWebController',
	                templateUrl: 'app/components/air/winwebconnect/win_status_list.html',
	                resolve: {
	                    loadMyFiles: function($ocLazyLoad) {
	                        return $ocLazyLoad
	                            .load({
	                                name: 'NewAge',
	                                files: [
	                                    '/app/components/air/winwebconnect/winWebController.js'
	                                ]
	                            })
	                    }
	                }
	            })


	    }
	]);

	app.factory('recentHistoryFactory', ['$resource',function($resource) {
	    return $resource("/api/v1/recenthistory", {}, {
	        save: {
	            method: 'POST',
	            params: {},
	            isArray: false
	        },
	        list: {
	            method: 'GET',
	            params: {},
	            isArray: false
	        },
	        deleteHistory: {
	            method: 'DELETE',
	            params: {},
	            isArray: false
	        }
	    });
	}])


	app.factory('SaveFormDataService', ['$rootScope', 'appMetaFactory',
	    function($rootScope, appMetaFactory) {
	        var factory = {};
	        factory.saveHistory = function() {
	            if (localStorage.trackId != undefined && localStorage.trackId != null && localStorage.trackId.length > 0 &&
	                $rootScope.unfinishedFormHistoryList != undefined && $rootScope.unfinishedFormHistoryList != null &&
	                $rootScope.unfinishedFormHistoryList.length > 0) {
	                var submitData = {
	                    key: localStorage.trackId,
	                    value: angular.toJson($rootScope.unfinishedFormHistoryList)
	                };
	                appMetaFactory.saveUnsavedForm.save(submitData).$promise.then(function(data) {

	                    console.log("Form Data Saved successfully..", data);
	                }, function(error) {
	                    console.error("Before Unload save form data: ", error);
	                });
	            }
	        }
	        return factory;
	    }
	]);

	app.factory('RecentHistoryGroupMapService', ['$rootScope', function($rootScope) {
	    return {
	        form: function() {
	            for (var ind = 0; ind < $rootScope.recentBrowseHistoryList.length; ind++) {
	                $rootScope.testRecentHistoryDayMapData = [];
	                angular.copy($rootScope.recentBrowseHistoryList, $rootScope.testRecentHistoryDayMapData);
	                $rootScope.testRecentHistoryDayMapData.messages = $rootScope.convertToDayWiseData($rootScope.testRecentHistoryDayMapData, 'groupByDate', true);
	            }
	        }
	    }
	}]);

	app.factory('RecentHistorySaveService', ['$rootScope', 'recentHistoryFactory', 'RecentHistoryGroupMapService',
	    function($rootScope, recentHistoryFactory, RecentHistoryGroupMapService) {
	        return {
	            form: function(rHistoryObj) {
	                recentHistoryFactory.save(rHistoryObj).$promise.then(function(data) {
	                    if (data.responseCode == 'ERR0') {

	                        if ($rootScope.recentBrowseHistoryList.length >= 20) {
	                            $rootScope.recentBrowseHistoryList.pop();
	                            $rootScope.recentBrowseHistoryList.splice(0, 0, data.responseObject);
	                        } else {
	                            $rootScope.recentBrowseHistoryList.push(data.responseObject);
	                        }
	                        //Recent History Add Dynamically without Using API Call
	                        var groupCategories = ["Master Shipment", "Shipment", "Invoice", "Quotation", "Enquiry"];
	                        if (groupCategories.indexOf(data.responseObject.stateCategory) >= 0) {
	                            if ($rootScope.recentHistoryGroupMap == undefined || $rootScope.recentHistoryGroupMap == null) {
	                                $rootScope.recentHistoryGroupMap = new Map();
	                            }
	                            var junkRecenttempArray = $rootScope.recentHistoryGroupMap.get(data.responseObject.stateCategory);
	                            if (junkRecenttempArray == undefined || junkRecenttempArray == null) {
	                                junkRecenttempArray = [];
	                            }
	                            if (junkRecenttempArray.length > 4) {
	                                junkRecenttempArray.splice(0, 1);
	                            }
	                            junkRecenttempArray.push(data.responseObject);

	                            $rootScope.recentHistoryGroupMap.put(data.responseObject.stateCategory, junkRecenttempArray);
	                        }
	                        RecentHistoryGroupMapService.form();
	                    } else {
	                        console.log("Error while saving the RecentHistory ", data.responseDescription);
	                    }
	                }, function(error) {

	                });
	            }
	        }
	    }
	]);
	app.factory('FormGroupMapService', ['$rootScope', 'SaveFormDataService', function($rootScope, SaveFormDataService) {
	    return {
	        form: function() {
	            $rootScope.unsavedByGroupForm = new Map();

	            if ($rootScope.unfinishedFormHistoryList != undefined &&
	                $rootScope.unfinishedFormHistoryList != null) {
	                for (var ind = 0; ind < $rootScope.unfinishedFormHistoryList.length; ind++) {
	                    $rootScope.junktempArray = $rootScope.unsavedByGroupForm.get($rootScope.unfinishedFormHistoryList[ind].category);
	                    if ($rootScope.junktempArray == undefined ||
	                        $rootScope.junktempArray == null) {
	                        $rootScope.junktempArray = [];
	                    }
	                    $rootScope.junktempArray.push($rootScope.unfinishedFormHistoryList[ind]);
	                    $rootScope.unsavedByGroupForm.put($rootScope.unfinishedFormHistoryList[ind].category, $rootScope.junktempArray);
	                }


	                //After Splice the list have to save in history

	                try {
	                    SaveFormDataService.saveHistory();
	                } catch (err) {
	                    console.error(err.message);
	                }

	            } else {
	                $rootScope.unfinishedFormHistoryList = [];
	            }

	        }
	    }
	}]);

	app.factory('UnfinishedFormHistoryService', ['$rootScope', 'FormGroupMapService', 'appMetaFactory',
	    function($rootScope, FormGroupMapService, appMetaFactory) {
	        var factory = {};
	        factory.addState = function(stateDataObject) {
	            if (stateDataObject != undefined &&
	                stateDataObject != null &&
	                stateDataObject.fromState != undefined &&
	                stateDataObject.fromState != null) {
	                var isAdded = false;

	                if ($rootScope.unfinishedFormHistoryList == undefined ||
	                    $rootScope.unfinishedFormHistoryList == null) {
	                    $rootScope.unfinishedFormHistoryList = [];
	                }
	                if (stateDataObject.fromParams.action != undefined &&
	                    stateDataObject.fromParams.action != null &&
	                    stateDataObject.fromParams.action != "ADD") {
	                    for (var ii = 0; ii < $rootScope.unfinishedFormHistoryList.length; ii++) {
	                        if ($rootScope.unfinishedFormHistoryList[ii].title == stateDataObject.title) {
	                            $rootScope.unfinishedFormHistoryList.splice(ii, 1);
	                            $rootScope.unfinishedFormHistoryList.push(stateDataObject);
	                            isAdded = true;
	                        }
	                    }
	                }
	                if (!isAdded) {
	                    if ($rootScope.unfinishedFormHistoryList.length >= 20) {
	                        $rootScope.unfinishedFormHistoryList.pop();
	                        $rootScope.unfinishedFormHistoryList.splice(0, 0, stateDataObject);
	                    } else {
	                        $rootScope.unfinishedFormHistoryList.push(stateDataObject);
	                    }
	                }

	                FormGroupMapService.form();
	                return true;
	            } else {
	                return false;
	            }
	        }
	        return factory;
	    }
	]);


	app.factory('GoToUnfilledFormNavigationService', ['$rootScope', '$q', '$state', 'FormGroupMapService',
	    function($rootScope, $q, $state, FormGroupMapService) {
	        return {
	            goToState: function(obj, controlParams) {
	                var index = $rootScope.unfinishedFormHistoryList.indexOf(obj);
	                if (index > -1) {
	                    $rootScope.unfinishedFormHistoryList.splice(index, 1);

	                    //TO remove View Page from unsave form history - Starts Here
	                    var stateTitleFlag = obj.title.includes("Edit");
	                    if (stateTitleFlag) {
	                        var stateTitle = obj.title.replace("Edit", "View");

	                        for (var chkIndex = 0; chkIndex < $rootScope.unfinishedFormHistoryList.length; chkIndex++) {
	                            if ($rootScope.unfinishedFormHistoryList[chkIndex].title == stateTitle) {
	                                $rootScope.unfinishedFormHistoryList.splice(chkIndex, 1);
	                                break;
	                            }
	                        }
	                    }
	                    //TO remove View Page from unsave form history - Ends Here

	                    $rootScope.selectedUnfilledFormData = obj.data;
	                    var params = obj.fromParams;
	                    params.fromHistory = 'Yes';
	                    if (controlParams != undefined && controlParams != null) {
	                        if (controlParams.forObj != undefined && controlParams.forObj != null) {
	                            params.forObj = controlParams.forObj;
	                        }
	                        if (controlParams.serIndx != undefined && controlParams.serIndx != null) {
	                            params.serIndx = controlParams.serIndx;
	                        }
	                        if (controlParams.docIndx != undefined && controlParams.docIndx != null) {
	                            params.docIndx = controlParams.docIndx;
	                        }
	                        if (controlParams.selectedTab != undefined && controlParams.selectedTab != null) {
	                            params.selectedTab = controlParams.selectedTab;
	                        }

	                        if (controlParams.submitAction != undefined && controlParams.submitAction != null) {
	                            params.submitAction = controlParams.submitAction;
	                        }
	                    }

	                    FormGroupMapService.form();
	                    $state.go(obj.fromState.name, params);
	                    return true;
	                } else {
	                    return false;
	                }
	            }

	        }
	    }
	]);

	app.factory('RecentHistoryService', ['$rootScope', function($rootScope) {
	    var factory = {};
	    factory.addState = function(stateDataObject) {
	        if (stateDataObject != undefined && stateDataObject != null && stateDataObject.fromState != undefined && stateDataObject.fromState != null) {
	            if ($rootScope.recentHistoryList == undefined || $rootScope.recentHistoryList == null) {
	                $rootScope.recentHistoryList = [];
	            }
	            $rootScope.recentHistoryList.push(stateDataObject);
	            localStorage.recentHistoryList = angular.toJson($rootScope.recentHistoryList);
	            return true;
	        } else {
	            return false;
	        }
	    }
	    return factory;
	}]);

	app.factory('GoToRecentHistoryNavigationService', ['$rootScope', '$q', '$state',
	    function($rootScope, $q, $state) {
	        return {
	            goToState: function(obj) {
	                var index = $rootScope.recentHistoryList.indexOf(obj);
	                if (index > -1) {
	                    $rootScope.recentHistoryList.splice(index, 1);
	                    var params = obj.fromParams;
	                    params.fromHistory = 'Yes';
	                    localStorage.recentHistoryList = angular.toJson($rootScope.recentHistoryList);
	                    $state.go(obj.fromState.name, params);
	                    return true;
	                } else {
	                    return false;
	                }
	            }
	        }
	    }
	]);

	app.factory('beforeUnload', ['$rootScope', '$window', '$state', 'appMetaFactory',function($rootScope, $window, $state, appMetaFactory) {
	    $window.onbeforeunload = function(e) {
	        localStorage.isMasterReloaded = "Yes";
	        var confirmation = {};
	        localStorage.nls = JSON.stringify($rootScope.nls);
	        localStorage.appRegExp = JSON.stringify($rootScope.appRegExp);

	        if ($rootScope.stateEventMap != undefined &&
	            $rootScope.stateEventMap != null &&
	            $rootScope.stateEventMap.get($state.current.name) != null) {
	            var event = $rootScope.$broadcast($rootScope.stateEventMap.get($state.current.name) + "Reload", "Do you want to reload this page.");
	            if (event.defaultPrevented) {
	                return confirmation.message;
	            }
	        }
	    };

	    $window.onunload = function() {
	        // console.log("Unload Event Name :: ", $state.current.name+"Unload");
	        // $rootScope.$broadcast($rootScope.stateEventMap.get($state.current.name)
	        // + "Unload");
	    };
	    return {};
	    // return "Do You Want to reload";
	}])

	app.run(function($rootScope,$templateCache, $state, $location, $window, $http, $timeout, UnfinishedFormHistoryService, RecentHistoryService,
	    beforeUnload, RecentHistoryGroupMapService, recentHistoryFactory, FormGroupMapService, appMetaFactory) {

		/*$rootScope.$on('$viewContentLoaded', function() {
			console.log("cache removed");
			$templateCache.removeAll();
		});*/

	    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
	        $rootScope.userLogged = localStorage.authorized;

			
	        $rootScope.mainpreloder = true;
	        if ($rootScope.stateEventMap != undefined && $rootScope.stateEventMap != null &&
	            $rootScope.stateEventMap.get(fromState.name) != null) {
	            $rootScope.$broadcast($rootScope.stateEventMap.get(fromState.name), "Hi I am Going to leave this Add Enquiry Form");
	        }
	        if (fromParams.action == "VIEW" || toParams.submitAction != "Saved" && toParams.submitAction != "Cancelled" &&
	            toParams.submitAction != "Deleted" && (fromParams.action == "ADD" || fromParams.action == "EDIT" || fromParams.action == "CREATE") &&
	            $rootScope.unfinishedData != undefined && $rootScope.unfinishedData != null && $rootScope.unfinishedFormTitle != undefined &&
	            $rootScope.unfinishedFormTitle != null && $rootScope.unfinishedFormTitle.length > 0) {
	            var historyObj = {
	                'fromState': $state.current,
	                'fromParams': fromParams,
	                'toState': toState,
	                'toParams': toParams,
	                'data': $rootScope.unfinishedData,
	                'title': $rootScope.unfinishedFormTitle,
	                'subTitle': $rootScope.subTitle,
	                'category': $rootScope.category,
	                'date': $rootScope.dateAndTimeToString(new Date()),
	                'serviceCode': $rootScope.serviceCodeForUnHistory,
	                'orginAndDestination': "(" + $rootScope.orginAndDestinationUnHistory + ")"
	            }
	            if (toParams != undefined && toParams != null && toParams.nav_src_bkref_key != undefined &&
	                toParams.nav_src_bkref_key != null && toParams.nav_src_bkref_key != "") {
	                historyObj.nav_src_bkref_key = toParams.nav_src_bkref_key;
	            }
	            if ($rootScope.transactionServiceStateArr.indexOf($state.current.name) > -1) {
	                historyObj.showService = true;
	            }
	            UnfinishedFormHistoryService.addState(historyObj);
	            $rootScope.unfinishedData = undefined;
	            $rootScope.unfinishedFormTitle = '';
	            $rootScope.subTitle = '';
	        }
	        if (($rootScope.userLogged == "true" || $rootScope.userLogged == true) && toState.name === "login") {
	            event.preventDefault();
	            $timeout(function() {
		            $rootScope.mainpreloder = false;
		        }, 1000);
	            $state.go('layout.dashboard');
	            return;
	        }

	        if ($rootScope.userLogged == "true" || $rootScope.userLogged == true) {
	            var isReloaded = localStorage.isMasterReloaded;
	            if (fromState.name == undefined || fromState.name == null || fromState.name == "") {
	                isReloaded = "Yes";
	            }
	            if (isReloaded == "Yes") {
	                localStorage.isMasterReloaded = "No";
	                $rootScope.enum = localStorage.enum == null ? null : JSON.parse(localStorage.enum);
	                $rootScope.nls = localStorage.nls == null ? null : JSON.parse(localStorage.nls);
	                $rootScope.appRegExp = localStorage.appRegExp == null ? null : JSON.parse(localStorage.appRegExp);

	                recentHistoryFactory.list(function(data) {
	                    if (data.responseCode == 'ERR0') {
	                        $rootScope.recentBrowseHistoryList = data.responseObject.content;
	                        $rootScope.testRecentHistoryDayMapData = [];
	                        angular.copy($rootScope.recentBrowseHistoryList, $rootScope.testRecentHistoryDayMapData);
	                        $rootScope.testRecentHistoryDayMapData.messages = $rootScope.convertToDayWiseData($rootScope.testRecentHistoryDayMapData, 'groupByDate', true);
	                        RecentHistoryGroupMapService.form();
	                    } else {
	                        $rootScope.recentBrowseHistoryList = [];
	                    }
	                }, function(error) {});
	                var submitData = {
	                    key: localStorage.trackId,
	                    value: null
	                };
	                if ($state.current.name != "login") {
	                    $rootScope.userProfile = localStorage.userProfile == null ? null : JSON.parse(localStorage.userProfile);

	                    $rootScope.populateUserProfileData();
	                }
	                if ($rootScope.userProfile != undefined && $rootScope.userProfile != null) {
	                    appMetaFactory.getUnsavedForm.query(submitData).$promise.then(function(data) {

	                        if (data.responseObject != null) {
	                            $rootScope.unfinishedFormHistoryList = JSON.parse(data.responseObject);
	                            FormGroupMapService.form();
	                        }
	                        console.log("Form Data Saved successfully..");
	                    }, function(error) {
	                        console.error("Before Unload save form data: ", error);
	                    });

	                }
	                $rootScope.appMasterData = localStorage.appMasterData == null ? null : JSON.parse(localStorage.appMasterData);
	                $rootScope.baseCurrenyRate = localStorage.baseCurrenyRate == null ? null : JSON.parse(localStorage.baseCurrenyRate);
	                $rootScope.reportMap = localStorage.reportMapJson == null ? null : JSON.parse(localStorage.reportMapJson);
	                $rootScope.navigate1 = localStorage.navigate1;
	                $rootScope.navigate2 = localStorage.navigate2;
	                $rootScope.navigate3 = localStorage.navigate3;
	            }
	            return;
	        }
	        if (toState.name === "login") {
	            return;
	        }
	        if ($rootScope.userLogged == "false" || $rootScope.userLogged == false) {
	            event.preventDefault();
	            $state.go('login');
	            return;
	        }


	    });



	    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
	    	$timeout(function() {
	            $rootScope.mainpreloder = false;
	        }, 2000);
	    })
	});
