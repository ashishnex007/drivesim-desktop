import os
import sys
import subprocess

def main(level, scene, town, weather_param=None, num_walkers=None, num_vehicles_foreign=None,
         num_vehicles_Indic_TwoWheeler=None, num_vehicles_Indic_HeavyVehicle=None, num_vehicles_Indic_ThreeWheeler=None,
         num_vehicles_Indic_FourWheeler=None):
    print(level)
    print(scene)
    print(town)

    print(weather_param)
    print(num_walkers)
    print(num_vehicles_foreign)
    print(num_vehicles_Indic_TwoWheeler)
    print(num_vehicles_Indic_HeavyVehicle)
    print(num_vehicles_Indic_ThreeWheeler)
    print(num_vehicles_Indic_FourWheeler)

    # Validate scene and town
    # scene_id = scene_map.get(scene)
    # town_id = town_map.get(town)

    scene_id = scene
    town_id = town

    print(scene_id)
    if scene_id is None:
        raise ValueError("Unknown scene")
    if town_id is None:
        raise ValueError("Unknown town")

    level = level.lower()

    # Default parameters
    weather_param = weather_param or '\'Wet Cloudy Noon\''
    display_caution_param = '--display_caution'
    # display_caution_param = ''

    # Initialize other_params
    other_params = ''

    if level == 'easy':
        repetitions = 1
        other_params = f'--repetitions {repetitions}'
    elif level == 'intermediate':
        if scene_id == '1':
            num_walkers = num_walkers or 15
            num_vehicles_foreign = num_vehicles_foreign or 2
            num_vehicles_Indic_TwoWheeler = num_vehicles_Indic_TwoWheeler or 10
            other_params = f'--spawn_pedestrian --num_walkers {num_walkers} --spawn_vehicle_foreign --num_vehicles_foreign {num_vehicles_foreign} --spawn_vehicle --spawn_vehicle_Indic_TwoWheeler --num_vehicles_Indic_TwoWheeler {num_vehicles_Indic_TwoWheeler}'
        elif scene_id == '2':
            num_walkers = num_walkers or 15
            num_vehicles_foreign = num_vehicles_foreign or 5
            num_vehicles_Indic_TwoWheeler = num_vehicles_Indic_TwoWheeler or 5
            num_vehicles_Indic_ThreeWheeler = num_vehicles_Indic_ThreeWheeler or 5
            other_params = f'--spawn_pedestrian --num_walkers {num_walkers} --spawn_vehicle_foreign --num_vehicles_foreign {num_vehicles_foreign} --spawn_vehicle --spawn_vehicle_Indic_TwoWheeler --num_vehicles_Indic_TwoWheeler {num_vehicles_Indic_TwoWheeler} --spawn_vehicle_Indic_ThreeWheeler --num_vehicles_Indic_ThreeWheeler {num_vehicles_Indic_ThreeWheeler}'
        elif scene_id == '3':
            num_walkers = num_walkers or 15
            num_vehicles_foreign = num_vehicles_foreign or 5
            num_vehicles_Indic_TwoWheeler = num_vehicles_Indic_TwoWheeler or 5
            num_vehicles_Indic_ThreeWheeler = num_vehicles_Indic_ThreeWheeler or 5
            other_params = f'--spawn_pedestrian --num_walkers {num_walkers} --spawn_vehicle_foreign --num_vehicles_foreign {num_vehicles_foreign} --spawn_vehicle --spawn_vehicle_Indic_TwoWheeler --num_vehicles_Indic_TwoWheeler {num_vehicles_Indic_TwoWheeler} --spawn_vehicle_Indic_ThreeWheeler --num_vehicles_Indic_ThreeWheeler {num_vehicles_Indic_ThreeWheeler}'
    elif level == 'hard':
        if scene_id == '1':
            num_walkers = num_walkers or 150
            num_vehicles_foreign = num_vehicles_foreign or 5
            num_vehicles_Indic_TwoWheeler = num_vehicles_Indic_TwoWheeler or 15
            num_vehicles_Indic_HeavyVehicle = num_vehicles_Indic_HeavyVehicle or 3
            num_vehicles_Indic_ThreeWheeler = num_vehicles_Indic_ThreeWheeler or 5
            other_params = f'--spawn_pedestrian --num_walkers {num_walkers} --spawn_vehicle_foreign --num_vehicles_foreign {num_vehicles_foreign} --spawn_vehicle --spawn_vehicle_Indic_TwoWheeler --num_vehicles_Indic_TwoWheeler {num_vehicles_Indic_TwoWheeler} --spawn_vehicle_Indic_HeavyVehicle --num_vehicles_Indic_HeavyVehicle {num_vehicles_Indic_HeavyVehicle} --spawn_vehicle_Indic_ThreeWheeler --num_vehicles_Indic_ThreeWheeler {num_vehicles_Indic_ThreeWheeler}'
        elif scene_id == '2':
            num_vehicles_foreign = num_walkers or 5
            num_vehicles_Indic_TwoWheeler = num_vehicles_Indic_TwoWheeler or 10
            num_vehicles_Indic_HeavyVehicle = num_vehicles_Indic_HeavyVehicle or 3
            num_vehicles_Indic_ThreeWheeler = num_vehicles_Indic_ThreeWheeler or 5
            num_vehicles_Indic_FourWheeler = num_vehicles_Indic_FourWheeler or 5
            other_params = f'--spawn_vehicle_foreign --num_vehicles_foreign {num_vehicles_foreign} --spawn_vehicle --spawn_vehicle_Indic_TwoWheeler --num_vehicles_Indic_TwoWheeler {num_vehicles_Indic_TwoWheeler} --spawn_vehicle_Indic_HeavyVehicle --num_vehicles_Indic_HeavyVehicle {num_vehicles_Indic_HeavyVehicle} --spawn_vehicle_Indic_ThreeWheeler --num_vehicles_Indic_ThreeWheeler {num_vehicles_Indic_ThreeWheeler} --spawn_vehicle_Indic_FourWheeler --num_vehicles_Indic_FourWheeler {num_vehicles_Indic_FourWheeler}'
        elif scene_id == '3':
            num_vehicles_foreign = num_walkers or 5
            num_vehicles_Indic_TwoWheeler = num_vehicles_Indic_TwoWheeler or 10
            num_vehicles_Indic_HeavyVehicle = num_vehicles_Indic_HeavyVehicle or 3
            num_vehicles_Indic_ThreeWheeler = num_vehicles_Indic_ThreeWheeler or 5
            num_vehicles_Indic_FourWheeler = num_vehicles_Indic_FourWheeler or 5
            other_params = f'--spawn_vehicle_foreign --num_vehicles_foreign {num_vehicles_foreign} --spawn_vehicle --spawn_vehicle_Indic_TwoWheeler --num_vehicles_Indic_TwoWheeler {num_vehicles_Indic_TwoWheeler} --spawn_vehicle_Indic_HeavyVehicle --num_vehicles_Indic_HeavyVehicle {num_vehicles_Indic_HeavyVehicle} --spawn_vehicle_Indic_ThreeWheeler --num_vehicles_Indic_ThreeWheeler {num_vehicles_Indic_ThreeWheeler} --spawn_vehicle_Indic_FourWheeler --num_vehicles_Indic_FourWheeler {num_vehicles_Indic_FourWheeler}'

    # matte kudasai,pehle directory toh change karo na..
    # Change to the root directory
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root_dir)

    # Construct the command
    # command = (f"python3 scenario_runner.py --route srunner/data/final_routes_loop.xml srunner/data/final_all_towns_traffic_scenarios_loop_{level}{scene_id}.json {town_id} --agent srunner/autoagents/human_agent.py --output --weather {weather_param} {other_params}")
    # command = (f"python3 scenario_runner.py --route srunner/data/final_routes_loop.xml srunner/data/final_all_towns_traffic_scenarios_loop_{level}{scene_id}.json {town_id} --agent srunner/autoagents/steering_agent.py --output --weather {weather_param} {other_params}")
    command = (f"python3 scenario_runner.py --route srunner/data/final_routes_loop.xml srunner/data/final_all_towns_traffic_scenarios_loop_{level}{scene_id}.json {town_id} --output --weather {weather_param} {other_params} --json")

    print(command)

    # Open terminals and capture output
    p1 = subprocess.Popen(f'cd "{root_dir}/scenario_runner" && {command}', 
                      shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    # Start the second process in the background
    p2 = subprocess.Popen(f'cd "{root_dir}/scenario_runner" && python3 manual_control_steeringwheel_trials_copy.py {display_caution_param}', 
                        shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
    # os.killpg(os.getpgid(p2.pid), signal.SIGTERM)
    # os.killpg(os.getpgid(p2.pid), signal.SIGKILL) #SIGINT

if __name__ == "__main__":
    # mandatory arguments
    level = sys.argv[1]
    scene = sys.argv[2]
    town = sys.argv[3]

    # optional params
    weather_param = sys.argv[4] if len(sys.argv) > 4 and sys.argv[4] != 'null' else None
    num_walkers = int(sys.argv[5]) if len(sys.argv) > 5 and sys.argv[5] != 'null' else None
    num_vehicles_foreign = int(sys.argv[6]) if len(sys.argv) > 6 and sys.argv[6] != 'null' else None
    num_vehicles_Indic_TwoWheeler = int(sys.argv[7]) if len(sys.argv) > 7 and sys.argv[7] != 'null' else None
    num_vehicles_Indic_HeavyVehicle = int(sys.argv[8]) if len(sys.argv) > 8 and sys.argv[8] != 'null' else None
    num_vehicles_Indic_ThreeWheeler = int(sys.argv[9]) if len(sys.argv) > 9 and sys.argv[9] != 'null' else None
    num_vehicles_Indic_FourWheeler = int(sys.argv[10]) if len(sys.argv) > 10 and sys.argv[10] != 'null' else None

    print(level, scene, town, weather_param, num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler)
    main(level, scene, town, weather_param, num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler)