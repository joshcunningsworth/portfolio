/* anonymous funtion */
(function(){

    var app = angular.module('calcTool',[]);

    //angular service: scope -- pass variable between html & js
    app.controller('CalculatorController',['$scope',function($scope){

        $scope.lumens_options = [375, 600, 900, 1125, 1600];
        $scope.lumens_selected = 600;
        $scope.cost_selected = 12;
        $scope.hours_selected = 3;
        $scope.number_selected = 1;
        $scope.total_days = 365;
        
        $scope.inc_conversion = 0.0625;
        $scope.hal_conversion = 0.0450;
        $scope.cfl_conversion = 0.0146;
        $scope.led_conversion = 0.0125;

        $scope.calculate = function(){
            $scope.inc_wattage = (($scope.lumens_selected * $scope.inc_conversion) * $scope.number_selected).toFixed(1);
            $scope.hal_wattage = (($scope.lumens_selected * $scope.hal_conversion) * $scope.number_selected).toFixed(1);
            $scope.cfl_wattage = (($scope.lumens_selected * $scope.cfl_conversion) * $scope.number_selected).toFixed(1);
            $scope.led_wattage = (($scope.lumens_selected * $scope.led_conversion) * $scope.number_selected).toFixed(1);

            if($scope.hours_selected > 24){ $scope.hours_selected = 24; }
            if($scope.hours_selected < 0){ $scope.hours_selected = 0; }
            if($scope.cost_selected < 0){ $scope.cost_selected = 0; }
            if($scope.number_selected < 0){ $scope.number_selected = 0; }

            var total_hours = $scope.total_days * $scope.hours_selected;
            var cost = $scope.cost_selected / 100;

            $scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
            $scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
            $scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
            $scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);
            
        }

        $scope.calculate();

    }]);

})();