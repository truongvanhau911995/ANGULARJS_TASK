var app = angular.module('mugen', ['ui.bootstrap']);

app.controller('ModalCtrl', ['$scope', '$uibModal', '$rootScope', function ($scope, $uibModal, $rootScope) {
    var filePdf = null;
    $scope.infoConfigs = [
        {
            isCheck: true,
            name: "BYU-I",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "Timesheet",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "Compro",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "vvvvBYU-I",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "aaaBYU-I",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "sdsdBYU-I",
            cost: "542584612548"
        }, {
            isCheck: false,
            name: "ddBYU-I",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "BYU-I",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "BYU-Iaaa",
            cost: "542584612548"
        },
        {
            isCheck: false,
            name: "vvvBYU-I",
            cost: "542584612548"
        }
    ]
    $("#btnExport").attr("disabled","disabled");
    $scope.open = function () {
        var modalInstance = $uibModal.open({
            templateUrl: "WEB_INF/modal.html",
            controller: "ModalContentCtrl",
            windowClass: 'large-Modal',
            resolve: {
                infoConfig: function () {
                    return $scope.infoConfigs;
                }
            }
        });

        modalInstance.result.then(function (response) {
            $scope.infoConfigs = response;
        });

    };
}])

app.controller('ModalContentCtrl', function ($scope, $uibModalInstance, infoConfig) {
    $scope.infoConfig = angular.copy(infoConfig);
   // $("#btn-ok").attr("disabled","disabled");
    // $(document).ready(function () {

    //     $("#btn-ok").attr("disabled","disabled");
    // });
  
    $scope.$watch('infoConfig', function(newValues){
        // $scope.selectedItems.length = 0;
        // angular.forEach(newValues, function(item) {
        //     if (item.value == true) {
        //         $scope.selectedItems.push(item.name);
        //     }

        // });
        // console.log($scope.selectedItems);
        var m = $scope.infoConfig.findIndex(function(item) {
            return item.isCheck == true;
          });
          if (m > -1){
            $scope.hideButton = false;
          }else {
            $scope.hideButton = true;
          }
    }, true);
    $("tr").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    $('table').on('click', '.move-up', function () {
        var thisRow = $(this).closest('tr');
        var prevRow = thisRow.prev();
        if (prevRow.length) {
            prevRow.before(thisRow);
        }
    });
    
    $('table').on('click', '.move-down', function () {
        var thisRow = $(this).closest('tr');
        var nextRow = thisRow.next();
        if (nextRow.length) {
            nextRow.after(thisRow);
        }
    });
    $scope.ok = function () {
     
       $uibModalInstance.close($scope.infoConfig);
    }

    $scope.cancel = function () {
       
        $uibModalInstance.dismiss();
    }
});