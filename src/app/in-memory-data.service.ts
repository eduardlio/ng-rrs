import { Injectable } from '@angular/core';
import { Exercise } from './exercise';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

   createDb(){
      const exercises: Exercise[] =[
         {
            "id": 0,
            "name": "100 doors",
            "link": "http://rosettacode.org/wiki/100_doors"
         },
         {
            "id": 1,
            "name": "15 Puzzle Game",
            "link": "http://rosettacode.org/wiki/15_Puzzle_Game"
         },
         {
            "id": 2,
            "name": "15 puzzle solver",
            "link": "http://rosettacode.org/wiki/15_puzzle_solver"
         },
         {
            "id": 3,
            "name": "2048",
            "link": "http://rosettacode.org/wiki/2048"
         },
         {
            "id": 4,
            "name": "24 game",
            "link": "http://rosettacode.org/wiki/24_game"
         },
         {
            "id": 5,
            "name": "24 game/Solve",
            "link": "http://rosettacode.org/wiki/24_game/Solve"
         },
         {
            "id": 6,
            "name": "4-rings or 4-squares puzzle",
            "link": "http://rosettacode.org/wiki/4-rings_or_4-squares_puzzle"
         },
         {
            "id": 7,
            "name": "9 billion names of God the integer",
            "link": "http://rosettacode.org/wiki/9_billion_names_of_God_the_integer"
         },
         {
            "id": 8,
            "name": "99 Bottles of Beer",
            "link": "http://rosettacode.org/wiki/99_Bottles_of_Beer"
         },
         {
            "id": 9,
            "name": "A+B",
            "link": "http://rosettacode.org/wiki/A%2BB"
         },
         {
            "id": 10,
            "name": "ABC Problem",
            "link": "http://rosettacode.org/wiki/ABC_Problem"
         },
         {
            "id": 11,
            "name": "Abstract type",
            "link": "http://rosettacode.org/wiki/Abstract_type"
         },
         {
            "id": 12,
            "name": "Abundant, deficient and perfect number classifications",
            "link": "http://rosettacode.org/wiki/Abundant,_deficient_and_perfect_number_classifications"
         },
         {
            "id": 13,
            "name": "Accumulator factory",
            "link": "http://rosettacode.org/wiki/Accumulator_factory"
         },
         {
            "id": 14,
            "name": "Ackermann function",
            "link": "http://rosettacode.org/wiki/Ackermann_function"
         },
         {
            "id": 15,
            "name": "Active Directory/Connect",
            "link": "http://rosettacode.org/wiki/Active_Directory/Connect"
         },
         {
            "id": 16,
            "name": "Active Directory/Search for a user",
            "link": "http://rosettacode.org/wiki/Active_Directory/Search_for_a_user"
         },
         {
            "id": 17,
            "name": "Active object",
            "link": "http://rosettacode.org/wiki/Active_object"
         },
         {
            "id": 18,
            "name": "Add a variable to a class instance at runtime",
            "link": "http://rosettacode.org/wiki/Add_a_variable_to_a_class_instance_at_runtime"
         },
         {
            "id": 19,
            "name": "Address of a variable",
            "link": "http://rosettacode.org/wiki/Address_of_a_variable"
         },
         {
            "id": 20,
            "name": "AKS test for primes",
            "link": "http://rosettacode.org/wiki/AKS_test_for_primes"
         },
         {
            "id": 21,
            "name": "Align columns",
            "link": "http://rosettacode.org/wiki/Align_columns"
         },
         {
            "id": 22,
            "name": "Aliquot sequence classifications",
            "link": "http://rosettacode.org/wiki/Aliquot_sequence_classifications"
         },
         {
            "id": 23,
            "name": "Almost prime",
            "link": "http://rosettacode.org/wiki/Almost_prime"
         },
         {
            "id": 24,
            "name": "Amb",
            "link": "http://rosettacode.org/wiki/Amb"
         },
         {
            "id": 25,
            "name": "Amicable pairs",
            "link": "http://rosettacode.org/wiki/Amicable_pairs"
         },
         {
            "id": 26,
            "name": "Anagrams",
            "link": "http://rosettacode.org/wiki/Anagrams"
         },
         {
            "id": 27,
            "name": "Anagrams/Deranged anagrams",
            "link": "http://rosettacode.org/wiki/Anagrams/Deranged_anagrams"
         },
         {
            "id": 28,
            "name": "Angle difference between two bearings",
            "link": "http://rosettacode.org/wiki/Angle_difference_between_two_bearings"
         },
         {
            "id": 29,
            "name": "Animate a pendulum",
            "link": "http://rosettacode.org/wiki/Animate_a_pendulum"
         },
         {
            "id": 30,
            "name": "Animation",
            "link": "http://rosettacode.org/wiki/Animation"
         },
         {
            "id": 31,
            "name": "Anonymous recursion",
            "link": "http://rosettacode.org/wiki/Anonymous_recursion"
         },
         {
            "id": 32,
            "name": "Append a record to the end of a text file",
            "link": "http://rosettacode.org/wiki/Append_a_record_to_the_end_of_a_text_file"
         },
         {
            "id": 33,
            "name": "Apply a callback to an array",
            "link": "http://rosettacode.org/wiki/Apply_a_callback_to_an_array"
         },
         {
            "id": 34,
            "name": "Apply a digital filter (direct form II transposed)",
            "link": "http://rosettacode.org/wiki/Apply_a_digital_filter_(direct_form_II_transposed)"
         },
         {
            "id": 35,
            "name": "Arbitrary-precision integers (included)",
            "link": "http://rosettacode.org/wiki/Arbitrary-precision_integers_(included)"
         },
         {
            "id": 36,
            "name": "Archimedean spiral",
            "link": "http://rosettacode.org/wiki/Archimedean_spiral"
         },
         {
            "id": 37,
            "name": "Arena storage pool",
            "link": "http://rosettacode.org/wiki/Arena_storage_pool"
         },
         {
            "id": 38,
            "name": "Arithmetic evaluation",
            "link": "http://rosettacode.org/wiki/Arithmetic_evaluation"
         },
         {
            "id": 39,
            "name": "Arithmetic-geometric mean",
            "link": "http://rosettacode.org/wiki/Arithmetic-geometric_mean"
         },
         {
            "id": 40,
            "name": "Arithmetic-geometric mean/Calculate Pi",
            "link": "http://rosettacode.org/wiki/Arithmetic-geometric_mean/Calculate_Pi"
         },
         {
            "id": 41,
            "name": "Arithmetic/Complex",
            "link": "http://rosettacode.org/wiki/Arithmetic/Complex"
         },
         {
            "id": 42,
            "name": "Arithmetic/Integer",
            "link": "http://rosettacode.org/wiki/Arithmetic/Integer"
         },
         {
            "id": 43,
            "name": "Arithmetic/Rational",
            "link": "http://rosettacode.org/wiki/Arithmetic/Rational"
         },
         {
            "id": 44,
            "name": "Array concatenation",
            "link": "http://rosettacode.org/wiki/Array_concatenation"
         },
         {
            "id": 45,
            "name": "Array length",
            "link": "http://rosettacode.org/wiki/Array_length"
         },
         {
            "id": 46,
            "name": "Arrays",
            "link": "http://rosettacode.org/wiki/Arrays"
         },
         {
            "id": 47,
            "name": "Assertions",
            "link": "http://rosettacode.org/wiki/Assertions"
         },
         {
            "id": 48,
            "name": "Associative array/Creation",
            "link": "http://rosettacode.org/wiki/Associative_array/Creation"
         },
         {
            "id": 49,
            "name": "Associative array/Iteration",
            "link": "http://rosettacode.org/wiki/Associative_array/Iteration"
         },
         {
            "id": 50,
            "name": "Atomic updates",
            "link": "http://rosettacode.org/wiki/Atomic_updates"
         },
         {
            "id": 51,
            "name": "Average loop length",
            "link": "http://rosettacode.org/wiki/Average_loop_length"
         },
         {
            "id": 52,
            "name": "Averages/Arithmetic mean",
            "link": "http://rosettacode.org/wiki/Averages/Arithmetic_mean"
         },
         {
            "id": 53,
            "name": "Averages/Mean angle",
            "link": "http://rosettacode.org/wiki/Averages/Mean_angle"
         },
         {
            "id": 54,
            "name": "Averages/Mean time of day",
            "link": "http://rosettacode.org/wiki/Averages/Mean_time_of_day"
         },
         {
            "id": 55,
            "name": "Averages/Median",
            "link": "http://rosettacode.org/wiki/Averages/Median"
         },
         {
            "id": 56,
            "name": "Averages/Mode",
            "link": "http://rosettacode.org/wiki/Averages/Mode"
         },
         {
            "id": 57,
            "name": "Averages/Pythagorean means",
            "link": "http://rosettacode.org/wiki/Averages/Pythagorean_means"
         },
         {
            "id": 58,
            "name": "Averages/Root mean square",
            "link": "http://rosettacode.org/wiki/Averages/Root_mean_square"
         },
         {
            "id": 59,
            "name": "Averages/Simple moving average",
            "link": "http://rosettacode.org/wiki/Averages/Simple_moving_average"
         },
         {
            "id": 60,
            "name": "AVL tree",
            "link": "http://rosettacode.org/wiki/AVL_tree"
         },
         {
            "id": 61,
            "name": "Babbage problem",
            "link": "http://rosettacode.org/wiki/Babbage_problem"
         },
         {
            "id": 62,
            "name": "Balanced brackets",
            "link": "http://rosettacode.org/wiki/Balanced_brackets"
         },
         {
            "id": 63,
            "name": "Balanced ternary",
            "link": "http://rosettacode.org/wiki/Balanced_ternary"
         },
         {
            "id": 64,
            "name": "Barnsley fern",
            "link": "http://rosettacode.org/wiki/Barnsley_fern"
         },
         {
            "id": 65,
            "name": "Benford's law",
            "link": "http://rosettacode.org/wiki/Benford%27s_law"
         },
         {
            "id": 66,
            "name": "Bernoulli numbers",
            "link": "http://rosettacode.org/wiki/Bernoulli_numbers"
         },
         {
            "id": 67,
            "name": "Best shuffle",
            "link": "http://rosettacode.org/wiki/Best_shuffle"
         },
         {
            "id": 68,
            "name": "Binary digits",
            "link": "http://rosettacode.org/wiki/Binary_digits"
         },
         {
            "id": 69,
            "name": "Binary search",
            "link": "http://rosettacode.org/wiki/Binary_search"
         },
         {
            "id": 70,
            "name": "Binary strings",
            "link": "http://rosettacode.org/wiki/Binary_strings"
         },
         {
            "id": 71,
            "name": "Bitcoin/address validation",
            "link": "http://rosettacode.org/wiki/Bitcoin/address_validation"
         },
         {
            "id": 72,
            "name": "Bitcoin/public point to address",
            "link": "http://rosettacode.org/wiki/Bitcoin/public_point_to_address"
         },
         {
            "id": 73,
            "name": "Bitmap",
            "link": "http://rosettacode.org/wiki/Bitmap"
         },
         {
            "id": 74,
            "name": "Bitmap/Bresenham's line algorithm",
            "link": "http://rosettacode.org/wiki/Bitmap/Bresenham%27s_line_algorithm"
         },
         {
            "id": 75,
            "name": "Bitmap/Bézier curves/Cubic",
            "link": "http://rosettacode.org/wiki/Bitmap/B%C3%A9zier_curves/Cubic"
         },
         {
            "id": 76,
            "name": "Bitmap/Bézier curves/Quadratic",
            "link": "http://rosettacode.org/wiki/Bitmap/B%C3%A9zier_curves/Quadratic"
         },
         {
            "id": 77,
            "name": "Bitmap/Flood fill",
            "link": "http://rosettacode.org/wiki/Bitmap/Flood_fill"
         },
         {
            "id": 78,
            "name": "Bitmap/Histogram",
            "link": "http://rosettacode.org/wiki/Bitmap/Histogram"
         },
         {
            "id": 79,
            "name": "Bitmap/Midpoint circle algorithm",
            "link": "http://rosettacode.org/wiki/Bitmap/Midpoint_circle_algorithm"
         },
         {
            "id": 80,
            "name": "Bitmap/PPM conversion through a pipe",
            "link": "http://rosettacode.org/wiki/Bitmap/PPM_conversion_through_a_pipe"
         },
         {
            "id": 81,
            "name": "Bitmap/Read a PPM file",
            "link": "http://rosettacode.org/wiki/Bitmap/Read_a_PPM_file"
         },
         {
            "id": 82,
            "name": "Bitmap/Read an image through a pipe",
            "link": "http://rosettacode.org/wiki/Bitmap/Read_an_image_through_a_pipe"
         },
         {
            "id": 83,
            "name": "Bitmap/Write a PPM file",
            "link": "http://rosettacode.org/wiki/Bitmap/Write_a_PPM_file"
         },
         {
            "id": 84,
            "name": "Bitwise IO",
            "link": "http://rosettacode.org/wiki/Bitwise_IO"
         },
         {
            "id": 85,
            "name": "Bitwise operations",
            "link": "http://rosettacode.org/wiki/Bitwise_operations"
         },
         {
            "id": 86,
            "name": "Boolean values",
            "link": "http://rosettacode.org/wiki/Boolean_values"
         },
         {
            "id": 87,
            "name": "Box the compass",
            "link": "http://rosettacode.org/wiki/Box_the_compass"
         },
         {
            "id": 88,
            "name": "Brace expansion",
            "link": "http://rosettacode.org/wiki/Brace_expansion"
         },
         {
            "id": 89,
            "name": "Break OO privacy",
            "link": "http://rosettacode.org/wiki/Break_OO_privacy"
         },
         {
            "id": 90,
            "name": "Brownian tree",
            "link": "http://rosettacode.org/wiki/Brownian_tree"
         },
         {
            "id": 91,
            "name": "Bulls and cows",
            "link": "http://rosettacode.org/wiki/Bulls_and_cows"
         },
         {
            "id": 92,
            "name": "Bulls and cows/Player",
            "link": "http://rosettacode.org/wiki/Bulls_and_cows/Player"
         },
         {
            "id": 93,
            "name": "Caesar cipher",
            "link": "http://rosettacode.org/wiki/Caesar_cipher"
         },
         {
            "id": 94,
            "name": "Calendar",
            "link": "http://rosettacode.org/wiki/Calendar"
         },
         {
            "id": 95,
            "name": "Calendar - for \"REAL\" programmers",
            "link": "http://rosettacode.org/wiki/Calendar_-_for_%22REAL%22_programmers"
         },
         {
            "id": 96,
            "name": "Call a foreign-language function",
            "link": "http://rosettacode.org/wiki/Call_a_foreign-language_function"
         },
         {
            "id": 97,
            "name": "Call a function",
            "link": "http://rosettacode.org/wiki/Call_a_function"
         },
         {
            "id": 98,
            "name": "Call a function in a shared library",
            "link": "http://rosettacode.org/wiki/Call_a_function_in_a_shared_library"
         },
         {
            "id": 99,
            "name": "Call an object method",
            "link": "http://rosettacode.org/wiki/Call_an_object_method"
         },
         {
            "id": 100,
            "name": "Canny edge detector",
            "link": "http://rosettacode.org/wiki/Canny_edge_detector"
         },
         {
            "id": 101,
            "name": "Carmichael 3 strong pseudoprimes",
            "link": "http://rosettacode.org/wiki/Carmichael_3_strong_pseudoprimes"
         },
         {
            "id": 102,
            "name": "Cartesian product of two or more lists",
            "link": "http://rosettacode.org/wiki/Cartesian_product_of_two_or_more_lists"
         },
         {
            "id": 103,
            "name": "Case-sensitivity of identifiers",
            "link": "http://rosettacode.org/wiki/Case-sensitivity_of_identifiers"
         },
         {
            "id": 104,
            "name": "Casting out nines",
            "link": "http://rosettacode.org/wiki/Casting_out_nines"
         },
         {
            "id": 105,
            "name": "Catalan numbers",
            "link": "http://rosettacode.org/wiki/Catalan_numbers"
         },
         {
            "id": 106,
            "name": "Catalan numbers/Pascal's triangle",
            "link": "http://rosettacode.org/wiki/Catalan_numbers/Pascal%27s_triangle"
         },
         {
            "id": 107,
            "name": "Catamorphism",
            "link": "http://rosettacode.org/wiki/Catamorphism"
         },
         {
            "id": 108,
            "name": "Catmull–Clark subdivision surface",
            "link": "http://rosettacode.org/wiki/Catmull%E2%80%93Clark_subdivision_surface"
         },
         {
            "id": 109,
            "name": "Chaos game",
            "link": "http://rosettacode.org/wiki/Chaos_game"
         },
         {
            "id": 110,
            "name": "Character codes",
            "link": "http://rosettacode.org/wiki/Character_codes"
         },
         {
            "id": 111,
            "name": "Chat server",
            "link": "http://rosettacode.org/wiki/Chat_server"
         },
         {
            "id": 112,
            "name": "Check Machin-like formulas",
            "link": "http://rosettacode.org/wiki/Check_Machin-like_formulas"
         },
         {
            "id": 113,
            "name": "Check that file exists",
            "link": "http://rosettacode.org/wiki/Check_that_file_exists"
         },
         {
            "id": 114,
            "name": "Checkpoint synchronization",
            "link": "http://rosettacode.org/wiki/Checkpoint_synchronization"
         },
         {
            "id": 115,
            "name": "Chinese remainder theorem",
            "link": "http://rosettacode.org/wiki/Chinese_remainder_theorem"
         },
         {
            "id": 116,
            "name": "Chinese zodiac",
            "link": "http://rosettacode.org/wiki/Chinese_zodiac"
         },
         {
            "id": 117,
            "name": "Cholesky decomposition",
            "link": "http://rosettacode.org/wiki/Cholesky_decomposition"
         },
         {
            "id": 118,
            "name": "Circles of given radius through two points",
            "link": "http://rosettacode.org/wiki/Circles_of_given_radius_through_two_points"
         },
         {
            "id": 119,
            "name": "Classes",
            "link": "http://rosettacode.org/wiki/Classes"
         },
         {
            "id": 120,
            "name": "Closest-pair problem",
            "link": "http://rosettacode.org/wiki/Closest-pair_problem"
         },
         {
            "id": 121,
            "name": "Closures/Value capture",
            "link": "http://rosettacode.org/wiki/Closures/Value_capture"
         },
         {
            "id": 122,
            "name": "Collections",
            "link": "http://rosettacode.org/wiki/Collections"
         },
         {
            "id": 123,
            "name": "Color of a screen pixel",
            "link": "http://rosettacode.org/wiki/Color_of_a_screen_pixel"
         },
         {
            "id": 124,
            "name": "Color quantization",
            "link": "http://rosettacode.org/wiki/Color_quantization"
         },
         {
            "id": 125,
            "name": "Colour bars/Display",
            "link": "http://rosettacode.org/wiki/Colour_bars/Display"
         },
         {
            "id": 126,
            "name": "Colour pinstripe/Display",
            "link": "http://rosettacode.org/wiki/Colour_pinstripe/Display"
         },
         {
            "id": 127,
            "name": "Colour pinstripe/Printer",
            "link": "http://rosettacode.org/wiki/Colour_pinstripe/Printer"
         },
         {
            "id": 128,
            "name": "Combinations",
            "link": "http://rosettacode.org/wiki/Combinations"
         },
         {
            "id": 129,
            "name": "Combinations and permutations",
            "link": "http://rosettacode.org/wiki/Combinations_and_permutations"
         },
         {
            "id": 130,
            "name": "Combinations with repetitions",
            "link": "http://rosettacode.org/wiki/Combinations_with_repetitions"
         },
         {
            "id": 131,
            "name": "Comma quibbling",
            "link": "http://rosettacode.org/wiki/Comma_quibbling"
         },
         {
            "id": 132,
            "name": "Command-line arguments",
            "link": "http://rosettacode.org/wiki/Command-line_arguments"
         },
         {
            "id": 133,
            "name": "Commatizing numbers",
            "link": "http://rosettacode.org/wiki/Commatizing_numbers"
         },
         {
            "id": 134,
            "name": "Comments",
            "link": "http://rosettacode.org/wiki/Comments"
         },
         {
            "id": 135,
            "name": "Compare a list of strings",
            "link": "http://rosettacode.org/wiki/Compare_a_list_of_strings"
         },
         {
            "id": 136,
            "name": "Compare sorting algorithms' performance",
            "link": "http://rosettacode.org/wiki/Compare_sorting_algorithms%27_performance"
         },
         {
            "id": 137,
            "name": "Compile-time calculation",
            "link": "http://rosettacode.org/wiki/Compile-time_calculation"
         },
         {
            "id": 138,
            "name": "Compiler/AST interpreter",
            "link": "http://rosettacode.org/wiki/Compiler/AST_interpreter"
         },
         {
            "id": 139,
            "name": "Compiler/code generator",
            "link": "http://rosettacode.org/wiki/Compiler/code_generator"
         },
         {
            "id": 140,
            "name": "Compiler/lexical analyzer",
            "link": "http://rosettacode.org/wiki/Compiler/lexical_analyzer"
         },
         {
            "id": 141,
            "name": "Compiler/syntax analyzer",
            "link": "http://rosettacode.org/wiki/Compiler/syntax_analyzer"
         },
         {
            "id": 142,
            "name": "Compiler/virtual machine interpreter",
            "link": "http://rosettacode.org/wiki/Compiler/virtual_machine_interpreter"
         },
         {
            "id": 143,
            "name": "Compound data type",
            "link": "http://rosettacode.org/wiki/Compound_data_type"
         },
         {
            "id": 144,
            "name": "Concurrent computing",
            "link": "http://rosettacode.org/wiki/Concurrent_computing"
         },
         {
            "id": 145,
            "name": "Conditional structures",
            "link": "http://rosettacode.org/wiki/Conditional_structures"
         },
         {
            "id": 146,
            "name": "Conjugate transpose",
            "link": "http://rosettacode.org/wiki/Conjugate_transpose"
         },
         {
            "id": 147,
            "name": "Constrained genericity",
            "link": "http://rosettacode.org/wiki/Constrained_genericity"
         },
         {
            "id": 148,
            "name": "Constrained random points on a circle",
            "link": "http://rosettacode.org/wiki/Constrained_random_points_on_a_circle"
         },
         {
            "id": 149,
            "name": "Continued fraction",
            "link": "http://rosettacode.org/wiki/Continued_fraction"
         },
         {
            "id": 150,
            "name": "Continued fraction/Arithmetic/Construct from rational number",
            "link": "http://rosettacode.org/wiki/Continued_fraction/Arithmetic/Construct_from_rational_number"
         },
         {
            "id": 151,
            "name": "Convert decimal number to rational",
            "link": "http://rosettacode.org/wiki/Convert_decimal_number_to_rational"
         },
         {
            "id": 152,
            "name": "Convert seconds to compound duration",
            "link": "http://rosettacode.org/wiki/Convert_seconds_to_compound_duration"
         },
         {
            "id": 153,
            "name": "Conway's Game of Life",
            "link": "http://rosettacode.org/wiki/Conway%27s_Game_of_Life"
         },
         {
            "id": 154,
            "name": "Copy a string",
            "link": "http://rosettacode.org/wiki/Copy_a_string"
         },
         {
            "id": 155,
            "name": "Count in factors",
            "link": "http://rosettacode.org/wiki/Count_in_factors"
         },
         {
            "id": 156,
            "name": "Count in octal",
            "link": "http://rosettacode.org/wiki/Count_in_octal"
         },
         {
            "id": 157,
            "name": "Count occurrences of a substring",
            "link": "http://rosettacode.org/wiki/Count_occurrences_of_a_substring"
         },
         {
            "id": 158,
            "name": "Count the coins",
            "link": "http://rosettacode.org/wiki/Count_the_coins"
         },
         {
            "id": 159,
            "name": "Cramer's rule",
            "link": "http://rosettacode.org/wiki/Cramer%27s_rule"
         },
         {
            "id": 160,
            "name": "CRC-32",
            "link": "http://rosettacode.org/wiki/CRC-32"
         },
         {
            "id": 161,
            "name": "Create a file",
            "link": "http://rosettacode.org/wiki/Create_a_file"
         },
         {
            "id": 162,
            "name": "Create a file on magnetic tape",
            "link": "http://rosettacode.org/wiki/Create_a_file_on_magnetic_tape"
         },
         {
            "id": 163,
            "name": "Create a two-dimensional array at runtime",
            "link": "http://rosettacode.org/wiki/Create_a_two-dimensional_array_at_runtime"
         },
         {
            "id": 164,
            "name": "Create an HTML table",
            "link": "http://rosettacode.org/wiki/Create_an_HTML_table"
         },
         {
            "id": 165,
            "name": "Create an object at a given address",
            "link": "http://rosettacode.org/wiki/Create_an_object_at_a_given_address"
         },
         {
            "id": 166,
            "name": "CSV data manipulation",
            "link": "http://rosettacode.org/wiki/CSV_data_manipulation"
         },
         {
            "id": 167,
            "name": "CSV to HTML translation",
            "link": "http://rosettacode.org/wiki/CSV_to_HTML_translation"
         },
         {
            "id": 168,
            "name": "Cumulative standard deviation",
            "link": "http://rosettacode.org/wiki/Cumulative_standard_deviation"
         },
         {
            "id": 169,
            "name": "Currying",
            "link": "http://rosettacode.org/wiki/Currying"
         },
         {
            "id": 170,
            "name": "CUSIP",
            "link": "http://rosettacode.org/wiki/CUSIP"
         },
         {
            "id": 171,
            "name": "Cut a rectangle",
            "link": "http://rosettacode.org/wiki/Cut_a_rectangle"
         },
         {
            "id": 172,
            "name": "Date format",
            "link": "http://rosettacode.org/wiki/Date_format"
         },
         {
            "id": 173,
            "name": "Date manipulation",
            "link": "http://rosettacode.org/wiki/Date_manipulation"
         },
         {
            "id": 174,
            "name": "Day of the week",
            "link": "http://rosettacode.org/wiki/Day_of_the_week"
         },
         {
            "id": 175,
            "name": "Deal cards for FreeCell",
            "link": "http://rosettacode.org/wiki/Deal_cards_for_FreeCell"
         },
         {
            "id": 176,
            "name": "Death Star",
            "link": "http://rosettacode.org/wiki/Death_Star"
         },
         {
            "id": 177,
            "name": "Deconvolution/1D",
            "link": "http://rosettacode.org/wiki/Deconvolution/1D"
         },
         {
            "id": 178,
            "name": "Deconvolution/2D+",
            "link": "http://rosettacode.org/wiki/Deconvolution/2D%2B"
         },
         {
            "id": 179,
            "name": "Deepcopy",
            "link": "http://rosettacode.org/wiki/Deepcopy"
         },
         {
            "id": 180,
            "name": "Define a primitive data type",
            "link": "http://rosettacode.org/wiki/Define_a_primitive_data_type"
         },
         {
            "id": 181,
            "name": "Delegates",
            "link": "http://rosettacode.org/wiki/Delegates"
         },
         {
            "id": 182,
            "name": "Delete a file",
            "link": "http://rosettacode.org/wiki/Delete_a_file"
         },
         {
            "id": 183,
            "name": "Department Numbers",
            "link": "http://rosettacode.org/wiki/Department_Numbers"
         },
         {
            "id": 184,
            "name": "Detect division by zero",
            "link": "http://rosettacode.org/wiki/Detect_division_by_zero"
         },
         {
            "id": 185,
            "name": "Determine if a string is numeric",
            "link": "http://rosettacode.org/wiki/Determine_if_a_string_is_numeric"
         },
         {
            "id": 186,
            "name": "Determine if only one instance is running",
            "link": "http://rosettacode.org/wiki/Determine_if_only_one_instance_is_running"
         },
         {
            "id": 187,
            "name": "Digital root",
            "link": "http://rosettacode.org/wiki/Digital_root"
         },
         {
            "id": 188,
            "name": "Digital root/Multiplicative digital root",
            "link": "http://rosettacode.org/wiki/Digital_root/Multiplicative_digital_root"
         },
         {
            "id": 189,
            "name": "Dinesman's multiple-dwelling problem",
            "link": "http://rosettacode.org/wiki/Dinesman%27s_multiple-dwelling_problem"
         },
         {
            "id": 190,
            "name": "Dining philosophers",
            "link": "http://rosettacode.org/wiki/Dining_philosophers"
         },
         {
            "id": 191,
            "name": "Discordian date",
            "link": "http://rosettacode.org/wiki/Discordian_date"
         },
         {
            "id": 192,
            "name": "Distributed programming",
            "link": "http://rosettacode.org/wiki/Distributed_programming"
         },
         {
            "id": 193,
            "name": "DNS query",
            "link": "http://rosettacode.org/wiki/DNS_query"
         },
         {
            "id": 194,
            "name": "Documentation",
            "link": "http://rosettacode.org/wiki/Documentation"
         },
         {
            "id": 195,
            "name": "Dot product",
            "link": "http://rosettacode.org/wiki/Dot_product"
         },
         {
            "id": 196,
            "name": "Doubly-linked list/Definition",
            "link": "http://rosettacode.org/wiki/Doubly-linked_list/Definition"
         },
         {
            "id": 197,
            "name": "Doubly-linked list/Element definition",
            "link": "http://rosettacode.org/wiki/Doubly-linked_list/Element_definition"
         },
         {
            "id": 198,
            "name": "Doubly-linked list/Element insertion",
            "link": "http://rosettacode.org/wiki/Doubly-linked_list/Element_insertion"
         },
         {
            "id": 199,
            "name": "Doubly-linked list/Traversal",
            "link": "http://rosettacode.org/wiki/Doubly-linked_list/Traversal"
         },
         {
            "id": 200,
            "name": "Dragon curve",
            "link": "http://rosettacode.org/wiki/Dragon_curve"
         },
         {
            "id": 201,
            "name": "Draw a clock",
            "link": "http://rosettacode.org/wiki/Draw_a_clock"
         },
         {
            "id": 202,
            "name": "Draw a cuboid",
            "link": "http://rosettacode.org/wiki/Draw_a_cuboid"
         },
         {
            "id": 203,
            "name": "Draw a rotating cube",
            "link": "http://rosettacode.org/wiki/Draw_a_rotating_cube"
         },
         {
            "id": 204,
            "name": "Draw a sphere",
            "link": "http://rosettacode.org/wiki/Draw_a_sphere"
         },
         {
            "id": 205,
            "name": "Dutch national flag problem",
            "link": "http://rosettacode.org/wiki/Dutch_national_flag_problem"
         },
         {
            "id": 206,
            "name": "Dynamic variable names",
            "link": "http://rosettacode.org/wiki/Dynamic_variable_names"
         },
         {
            "id": 207,
            "name": "Echo server",
            "link": "http://rosettacode.org/wiki/Echo_server"
         },
         {
            "id": 208,
            "name": "Egyptian division",
            "link": "http://rosettacode.org/wiki/Egyptian_division"
         },
         {
            "id": 209,
            "name": "Egyptian fractions",
            "link": "http://rosettacode.org/wiki/Egyptian_fractions"
         },
         {
            "id": 210,
            "name": "Element-wise operations",
            "link": "http://rosettacode.org/wiki/Element-wise_operations"
         },
         {
            "id": 211,
            "name": "Elementary cellular automaton",
            "link": "http://rosettacode.org/wiki/Elementary_cellular_automaton"
         },
         {
            "id": 212,
            "name": "Emirp primes",
            "link": "http://rosettacode.org/wiki/Emirp_primes"
         },
         {
            "id": 213,
            "name": "Empty directory",
            "link": "http://rosettacode.org/wiki/Empty_directory"
         },
         {
            "id": 214,
            "name": "Empty program",
            "link": "http://rosettacode.org/wiki/Empty_program"
         },
         {
            "id": 215,
            "name": "Empty string",
            "link": "http://rosettacode.org/wiki/Empty_string"
         },
         {
            "id": 216,
            "name": "Enforced immutability",
            "link": "http://rosettacode.org/wiki/Enforced_immutability"
         },
         {
            "id": 217,
            "name": "Entropy",
            "link": "http://rosettacode.org/wiki/Entropy"
         },
         {
            "id": 218,
            "name": "Enumerations",
            "link": "http://rosettacode.org/wiki/Enumerations"
         },
         {
            "id": 219,
            "name": "Environment variables",
            "link": "http://rosettacode.org/wiki/Environment_variables"
         },
         {
            "id": 220,
            "name": "Equilibrium index",
            "link": "http://rosettacode.org/wiki/Equilibrium_index"
         },
         {
            "id": 221,
            "name": "Ethiopian multiplication",
            "link": "http://rosettacode.org/wiki/Ethiopian_multiplication"
         },
         {
            "id": 222,
            "name": "Euler method",
            "link": "http://rosettacode.org/wiki/Euler_method"
         },
         {
            "id": 223,
            "name": "Euler's sum of powers conjecture",
            "link": "http://rosettacode.org/wiki/Euler%27s_sum_of_powers_conjecture"
         },
         {
            "id": 224,
            "name": "Evaluate binomial coefficients",
            "link": "http://rosettacode.org/wiki/Evaluate_binomial_coefficients"
         },
         {
            "id": 225,
            "name": "Even or odd",
            "link": "http://rosettacode.org/wiki/Even_or_odd"
         },
         {
            "id": 226,
            "name": "Events",
            "link": "http://rosettacode.org/wiki/Events"
         },
         {
            "id": 227,
            "name": "Evolutionary algorithm",
            "link": "http://rosettacode.org/wiki/Evolutionary_algorithm"
         },
         {
            "id": 228,
            "name": "Exceptions",
            "link": "http://rosettacode.org/wiki/Exceptions"
         },
         {
            "id": 229,
            "name": "Exceptions/Catch an exception thrown in a nested call",
            "link": "http://rosettacode.org/wiki/Exceptions/Catch_an_exception_thrown_in_a_nested_call"
         },
         {
            "id": 230,
            "name": "Executable library",
            "link": "http://rosettacode.org/wiki/Executable_library"
         },
         {
            "id": 231,
            "name": "Execute a Markov algorithm",
            "link": "http://rosettacode.org/wiki/Execute_a_Markov_algorithm"
         },
         {
            "id": 232,
            "name": "Execute a system command",
            "link": "http://rosettacode.org/wiki/Execute_a_system_command"
         },
         {
            "id": 233,
            "name": "Execute Brain****",
            "link": "http://rosettacode.org/wiki/Execute_Brain****"
         },
         {
            "id": 234,
            "name": "Execute HQ9+",
            "link": "http://rosettacode.org/wiki/Execute_HQ9%2B"
         },
         {
            "id": 235,
            "name": "Execute SNUSP",
            "link": "http://rosettacode.org/wiki/Execute_SNUSP"
         },
         {
            "id": 236,
            "name": "Exponentiation operator",
            "link": "http://rosettacode.org/wiki/Exponentiation_operator"
         },
         {
            "id": 237,
            "name": "Exponentiation order",
            "link": "http://rosettacode.org/wiki/Exponentiation_order"
         },
         {
            "id": 238,
            "name": "Extend your language",
            "link": "http://rosettacode.org/wiki/Extend_your_language"
         },
         {
            "id": 239,
            "name": "Extensible prime generator",
            "link": "http://rosettacode.org/wiki/Extensible_prime_generator"
         },
         {
            "id": 240,
            "name": "Extreme floating point values",
            "link": "http://rosettacode.org/wiki/Extreme_floating_point_values"
         },
         {
            "id": 241,
            "name": "Factorial",
            "link": "http://rosettacode.org/wiki/Factorial"
         },
         {
            "id": 242,
            "name": "Factors of a Mersenne number",
            "link": "http://rosettacode.org/wiki/Factors_of_a_Mersenne_number"
         },
         {
            "id": 243,
            "name": "Factors of an integer",
            "link": "http://rosettacode.org/wiki/Factors_of_an_integer"
         },
         {
            "id": 244,
            "name": "Farey sequence",
            "link": "http://rosettacode.org/wiki/Farey_sequence"
         },
         {
            "id": 245,
            "name": "Fast Fourier transform",
            "link": "http://rosettacode.org/wiki/Fast_Fourier_transform"
         },
         {
            "id": 246,
            "name": "FASTA format",
            "link": "http://rosettacode.org/wiki/FASTA_format"
         },
         {
            "id": 247,
            "name": "Fibonacci n-step number sequences",
            "link": "http://rosettacode.org/wiki/Fibonacci_n-step_number_sequences"
         },
         {
            "id": 248,
            "name": "Fibonacci sequence",
            "link": "http://rosettacode.org/wiki/Fibonacci_sequence"
         },
         {
            "id": 249,
            "name": "Fibonacci word",
            "link": "http://rosettacode.org/wiki/Fibonacci_word"
         },
         {
            "id": 250,
            "name": "Fibonacci word/fractal",
            "link": "http://rosettacode.org/wiki/Fibonacci_word/fractal"
         },
         {
            "id": 251,
            "name": "File input/output",
            "link": "http://rosettacode.org/wiki/File_input/output"
         },
         {
            "id": 252,
            "name": "File modification time",
            "link": "http://rosettacode.org/wiki/File_modification_time"
         },
         {
            "id": 253,
            "name": "File size",
            "link": "http://rosettacode.org/wiki/File_size"
         },
         {
            "id": 254,
            "name": "Filter",
            "link": "http://rosettacode.org/wiki/Filter"
         },
         {
            "id": 255,
            "name": "Find common directory path",
            "link": "http://rosettacode.org/wiki/Find_common_directory_path"
         },
         {
            "id": 256,
            "name": "Find largest left truncatable prime in a given base",
            "link": "http://rosettacode.org/wiki/Find_largest_left_truncatable_prime_in_a_given_base"
         },
         {
            "id": 257,
            "name": "Find limit of recursion",
            "link": "http://rosettacode.org/wiki/Find_limit_of_recursion"
         },
         {
            "id": 258,
            "name": "Find palindromic numbers in both binary and ternary bases",
            "link": "http://rosettacode.org/wiki/Find_palindromic_numbers_in_both_binary_and_ternary_bases"
         },
         {
            "id": 259,
            "name": "Find the intersection of a line with a plane",
            "link": "http://rosettacode.org/wiki/Find_the_intersection_of_a_line_with_a_plane"
         },
         {
            "id": 260,
            "name": "Find the intersection of two lines",
            "link": "http://rosettacode.org/wiki/Find_the_intersection_of_two_lines"
         },
         {
            "id": 261,
            "name": "Find the last Sunday of each month",
            "link": "http://rosettacode.org/wiki/Find_the_last_Sunday_of_each_month"
         },
         {
            "id": 262,
            "name": "Find the missing permutation",
            "link": "http://rosettacode.org/wiki/Find_the_missing_permutation"
         },
         {
            "id": 263,
            "name": "First class environments",
            "link": "http://rosettacode.org/wiki/First_class_environments"
         },
         {
            "id": 264,
            "name": "First-class functions",
            "link": "http://rosettacode.org/wiki/First-class_functions"
         },
         {
            "id": 265,
            "name": "First-class functions/Use numbers analogously",
            "link": "http://rosettacode.org/wiki/First-class_functions/Use_numbers_analogously"
         },
         {
            "id": 266,
            "name": "Five weekends",
            "link": "http://rosettacode.org/wiki/Five_weekends"
         },
         {
            "id": 267,
            "name": "FizzBuzz",
            "link": "http://rosettacode.org/wiki/FizzBuzz"
         },
         {
            "id": 268,
            "name": "Flatten a list",
            "link": "http://rosettacode.org/wiki/Flatten_a_list"
         },
         {
            "id": 269,
            "name": "Flipping bits game",
            "link": "http://rosettacode.org/wiki/Flipping_bits_game"
         },
         {
            "id": 270,
            "name": "Flow-control structures",
            "link": "http://rosettacode.org/wiki/Flow-control_structures"
         },
         {
            "id": 271,
            "name": "Floyd's triangle",
            "link": "http://rosettacode.org/wiki/Floyd%27s_triangle"
         },
         {
            "id": 272,
            "name": "Floyd-Warshall algorithm",
            "link": "http://rosettacode.org/wiki/Floyd-Warshall_algorithm"
         },
         {
            "id": 273,
            "name": "Forest fire",
            "link": "http://rosettacode.org/wiki/Forest_fire"
         },
         {
            "id": 274,
            "name": "Fork",
            "link": "http://rosettacode.org/wiki/Fork"
         },
         {
            "id": 275,
            "name": "Formal power series",
            "link": "http://rosettacode.org/wiki/Formal_power_series"
         },
         {
            "id": 276,
            "name": "Formatted numeric output",
            "link": "http://rosettacode.org/wiki/Formatted_numeric_output"
         },
         {
            "id": 277,
            "name": "Forward difference",
            "link": "http://rosettacode.org/wiki/Forward_difference"
         },
         {
            "id": 278,
            "name": "Four bit adder",
            "link": "http://rosettacode.org/wiki/Four_bit_adder"
         },
         {
            "id": 279,
            "name": "Fractal tree",
            "link": "http://rosettacode.org/wiki/Fractal_tree"
         },
         {
            "id": 280,
            "name": "Fractran",
            "link": "http://rosettacode.org/wiki/Fractran"
         },
         {
            "id": 281,
            "name": "FTP",
            "link": "http://rosettacode.org/wiki/FTP"
         },
         {
            "id": 282,
            "name": "Function composition",
            "link": "http://rosettacode.org/wiki/Function_composition"
         },
         {
            "id": 283,
            "name": "Function definition",
            "link": "http://rosettacode.org/wiki/Function_definition"
         },
         {
            "id": 284,
            "name": "Function frequency",
            "link": "http://rosettacode.org/wiki/Function_frequency"
         },
         {
            "id": 285,
            "name": "Function prototype",
            "link": "http://rosettacode.org/wiki/Function_prototype"
         },
         {
            "id": 286,
            "name": "Galton box animation",
            "link": "http://rosettacode.org/wiki/Galton_box_animation"
         },
         {
            "id": 287,
            "name": "Gamma function",
            "link": "http://rosettacode.org/wiki/Gamma_function"
         },
         {
            "id": 288,
            "name": "Gaussian elimination",
            "link": "http://rosettacode.org/wiki/Gaussian_elimination"
         },
         {
            "id": 289,
            "name": "General FizzBuzz",
            "link": "http://rosettacode.org/wiki/General_FizzBuzz"
         },
         {
            "id": 290,
            "name": "Generate Chess960 starting position",
            "link": "http://rosettacode.org/wiki/Generate_Chess960_starting_position"
         },
         {
            "id": 291,
            "name": "Generate lower case ASCII alphabet",
            "link": "http://rosettacode.org/wiki/Generate_lower_case_ASCII_alphabet"
         },
         {
            "id": 292,
            "name": "Generator/Exponential",
            "link": "http://rosettacode.org/wiki/Generator/Exponential"
         },
         {
            "id": 293,
            "name": "Generic swap",
            "link": "http://rosettacode.org/wiki/Generic_swap"
         },
         {
            "id": 294,
            "name": "Get system command output",
            "link": "http://rosettacode.org/wiki/Get_system_command_output"
         },
         {
            "id": 295,
            "name": "Globally replace text in several files",
            "link": "http://rosettacode.org/wiki/Globally_replace_text_in_several_files"
         },
         {
            "id": 296,
            "name": "Go Fish",
            "link": "http://rosettacode.org/wiki/Go_Fish"
         },
         {
            "id": 297,
            "name": "Gray code",
            "link": "http://rosettacode.org/wiki/Gray_code"
         },
         {
            "id": 298,
            "name": "Grayscale image",
            "link": "http://rosettacode.org/wiki/Grayscale_image"
         },
         {
            "id": 299,
            "name": "Greatest common divisor",
            "link": "http://rosettacode.org/wiki/Greatest_common_divisor"
         },
         {
            "id": 300,
            "name": "Greatest element of a list",
            "link": "http://rosettacode.org/wiki/Greatest_element_of_a_list"
         },
         {
            "id": 301,
            "name": "Greatest subsequential sum",
            "link": "http://rosettacode.org/wiki/Greatest_subsequential_sum"
         },
         {
            "id": 302,
            "name": "Greyscale bars/Display",
            "link": "http://rosettacode.org/wiki/Greyscale_bars/Display"
         },
         {
            "id": 303,
            "name": "Guess the number",
            "link": "http://rosettacode.org/wiki/Guess_the_number"
         },
         {
            "id": 304,
            "name": "Guess the number/With feedback",
            "link": "http://rosettacode.org/wiki/Guess_the_number/With_feedback"
         },
         {
            "id": 305,
            "name": "Guess the number/With feedback (player)",
            "link": "http://rosettacode.org/wiki/Guess_the_number/With_feedback_(player)"
         },
         {
            "id": 306,
            "name": "GUI component interaction",
            "link": "http://rosettacode.org/wiki/GUI_component_interaction"
         },
         {
            "id": 307,
            "name": "GUI enabling/disabling of controls",
            "link": "http://rosettacode.org/wiki/GUI_enabling/disabling_of_controls"
         },
         {
            "id": 308,
            "name": "GUI/Maximum window dimensions",
            "link": "http://rosettacode.org/wiki/GUI/Maximum_window_dimensions"
         },
         {
            "id": 309,
            "name": "Hailstone sequence",
            "link": "http://rosettacode.org/wiki/Hailstone_sequence"
         },
         {
            "id": 310,
            "name": "Hamming numbers",
            "link": "http://rosettacode.org/wiki/Hamming_numbers"
         },
         {
            "id": 311,
            "name": "Handle a signal",
            "link": "http://rosettacode.org/wiki/Handle_a_signal"
         },
         {
            "id": 312,
            "name": "Happy numbers",
            "link": "http://rosettacode.org/wiki/Happy_numbers"
         },
         {
            "id": 313,
            "name": "Harshad or Niven series",
            "link": "http://rosettacode.org/wiki/Harshad_or_Niven_series"
         },
         {
            "id": 314,
            "name": "Hash from two arrays",
            "link": "http://rosettacode.org/wiki/Hash_from_two_arrays"
         },
         {
            "id": 315,
            "name": "Hash join",
            "link": "http://rosettacode.org/wiki/Hash_join"
         },
         {
            "id": 316,
            "name": "Haversine formula",
            "link": "http://rosettacode.org/wiki/Haversine_formula"
         },
         {
            "id": 317,
            "name": "Hello world/Graphical",
            "link": "http://rosettacode.org/wiki/Hello_world/Graphical"
         },
         {
            "id": 318,
            "name": "Hello world/Line printer",
            "link": "http://rosettacode.org/wiki/Hello_world/Line_printer"
         },
         {
            "id": 319,
            "name": "Hello world/Newbie",
            "link": "http://rosettacode.org/wiki/Hello_world/Newbie"
         },
         {
            "id": 320,
            "name": "Hello world/Newline omission",
            "link": "http://rosettacode.org/wiki/Hello_world/Newline_omission"
         },
         {
            "id": 321,
            "name": "Hello world/Standard error",
            "link": "http://rosettacode.org/wiki/Hello_world/Standard_error"
         },
         {
            "id": 322,
            "name": "Hello world/Text",
            "link": "http://rosettacode.org/wiki/Hello_world/Text"
         },
         {
            "id": 323,
            "name": "Hello world/Web server",
            "link": "http://rosettacode.org/wiki/Hello_world/Web_server"
         },
         {
            "id": 324,
            "name": "Here document",
            "link": "http://rosettacode.org/wiki/Here_document"
         },
         {
            "id": 325,
            "name": "Heronian triangles",
            "link": "http://rosettacode.org/wiki/Heronian_triangles"
         },
         {
            "id": 326,
            "name": "Hickerson series of almost integers",
            "link": "http://rosettacode.org/wiki/Hickerson_series_of_almost_integers"
         },
         {
            "id": 327,
            "name": "Higher-order functions",
            "link": "http://rosettacode.org/wiki/Higher-order_functions"
         },
         {
            "id": 328,
            "name": "History variables",
            "link": "http://rosettacode.org/wiki/History_variables"
         },
         {
            "id": 329,
            "name": "Hofstadter Figure-Figure sequences",
            "link": "http://rosettacode.org/wiki/Hofstadter_Figure-Figure_sequences"
         },
         {
            "id": 330,
            "name": "Hofstadter Q sequence",
            "link": "http://rosettacode.org/wiki/Hofstadter_Q_sequence"
         },
         {
            "id": 331,
            "name": "Hofstadter-Conway $10,000 sequence",
            "link": "http://rosettacode.org/wiki/Hofstadter-Conway_$10,000_sequence"
         },
         {
            "id": 332,
            "name": "Holidays related to Easter",
            "link": "http://rosettacode.org/wiki/Holidays_related_to_Easter"
         },
         {
            "id": 333,
            "name": "Honeycombs",
            "link": "http://rosettacode.org/wiki/Honeycombs"
         },
         {
            "id": 334,
            "name": "Horizontal sundial calculations",
            "link": "http://rosettacode.org/wiki/Horizontal_sundial_calculations"
         },
         {
            "id": 335,
            "name": "Horner's rule for polynomial evaluation",
            "link": "http://rosettacode.org/wiki/Horner%27s_rule_for_polynomial_evaluation"
         },
         {
            "id": 336,
            "name": "Host introspection",
            "link": "http://rosettacode.org/wiki/Host_introspection"
         },
         {
            "id": 337,
            "name": "Hostname",
            "link": "http://rosettacode.org/wiki/Hostname"
         },
         {
            "id": 338,
            "name": "Hough transform",
            "link": "http://rosettacode.org/wiki/Hough_transform"
         },
         {
            "id": 339,
            "name": "HTTP",
            "link": "http://rosettacode.org/wiki/HTTP"
         },
         {
            "id": 340,
            "name": "HTTPS",
            "link": "http://rosettacode.org/wiki/HTTPS"
         },
         {
            "id": 341,
            "name": "HTTPS/Authenticated",
            "link": "http://rosettacode.org/wiki/HTTPS/Authenticated"
         },
         {
            "id": 342,
            "name": "HTTPS/Client-authenticated",
            "link": "http://rosettacode.org/wiki/HTTPS/Client-authenticated"
         },
         {
            "id": 343,
            "name": "Huffman coding",
            "link": "http://rosettacode.org/wiki/Huffman_coding"
         },
         {
            "id": 344,
            "name": "Hunt The Wumpus",
            "link": "http://rosettacode.org/wiki/Hunt_The_Wumpus"
         },
         {
            "id": 345,
            "name": "I before E except after C",
            "link": "http://rosettacode.org/wiki/I_before_E_except_after_C"
         },
         {
            "id": 346,
            "name": "IBAN",
            "link": "http://rosettacode.org/wiki/IBAN"
         },
         {
            "id": 347,
            "name": "Identity matrix",
            "link": "http://rosettacode.org/wiki/Identity_matrix"
         },
         {
            "id": 348,
            "name": "Image convolution",
            "link": "http://rosettacode.org/wiki/Image_convolution"
         },
         {
            "id": 349,
            "name": "Image noise",
            "link": "http://rosettacode.org/wiki/Image_noise"
         },
         {
            "id": 350,
            "name": "Include a file",
            "link": "http://rosettacode.org/wiki/Include_a_file"
         },
         {
            "id": 351,
            "name": "Increment a numerical string",
            "link": "http://rosettacode.org/wiki/Increment_a_numerical_string"
         },
         {
            "id": 352,
            "name": "Infinity",
            "link": "http://rosettacode.org/wiki/Infinity"
         },
         {
            "id": 353,
            "name": "Inheritance/Multiple",
            "link": "http://rosettacode.org/wiki/Inheritance/Multiple"
         },
         {
            "id": 354,
            "name": "Inheritance/Single",
            "link": "http://rosettacode.org/wiki/Inheritance/Single"
         },
         {
            "id": 355,
            "name": "Input loop",
            "link": "http://rosettacode.org/wiki/Input_loop"
         },
         {
            "id": 356,
            "name": "Integer comparison",
            "link": "http://rosettacode.org/wiki/Integer_comparison"
         },
         {
            "id": 357,
            "name": "Integer overflow",
            "link": "http://rosettacode.org/wiki/Integer_overflow"
         },
         {
            "id": 358,
            "name": "Integer sequence",
            "link": "http://rosettacode.org/wiki/Integer_sequence"
         },
         {
            "id": 359,
            "name": "Interactive programming",
            "link": "http://rosettacode.org/wiki/Interactive_programming"
         },
         {
            "id": 360,
            "name": "Introspection",
            "link": "http://rosettacode.org/wiki/Introspection"
         },
         {
            "id": 361,
            "name": "Inverted index",
            "link": "http://rosettacode.org/wiki/Inverted_index"
         },
         {
            "id": 362,
            "name": "Inverted syntax",
            "link": "http://rosettacode.org/wiki/Inverted_syntax"
         },
         {
            "id": 363,
            "name": "Iterated digits squaring",
            "link": "http://rosettacode.org/wiki/Iterated_digits_squaring"
         },
         {
            "id": 364,
            "name": "Jaro distance",
            "link": "http://rosettacode.org/wiki/Jaro_distance"
         },
         {
            "id": 365,
            "name": "Jensen's Device",
            "link": "http://rosettacode.org/wiki/Jensen%27s_Device"
         },
         {
            "id": 366,
            "name": "JortSort",
            "link": "http://rosettacode.org/wiki/JortSort"
         },
         {
            "id": 367,
            "name": "Josephus problem",
            "link": "http://rosettacode.org/wiki/Josephus_problem"
         },
         {
            "id": 368,
            "name": "Joystick position",
            "link": "http://rosettacode.org/wiki/Joystick_position"
         },
         {
            "id": 369,
            "name": "JSON",
            "link": "http://rosettacode.org/wiki/JSON"
         },
         {
            "id": 370,
            "name": "Julia set",
            "link": "http://rosettacode.org/wiki/Julia_set"
         },
         {
            "id": 371,
            "name": "Jump anywhere",
            "link": "http://rosettacode.org/wiki/Jump_anywhere"
         },
         {
            "id": 372,
            "name": "K-d tree",
            "link": "http://rosettacode.org/wiki/K-d_tree"
         },
         {
            "id": 373,
            "name": "K-means++ clustering",
            "link": "http://rosettacode.org/wiki/K-means%2B%2B_clustering"
         },
         {
            "id": 374,
            "name": "Kaprekar numbers",
            "link": "http://rosettacode.org/wiki/Kaprekar_numbers"
         },
         {
            "id": 375,
            "name": "Keyboard input/Flush the keyboard buffer",
            "link": "http://rosettacode.org/wiki/Keyboard_input/Flush_the_keyboard_buffer"
         },
         {
            "id": 376,
            "name": "Keyboard input/Keypress check",
            "link": "http://rosettacode.org/wiki/Keyboard_input/Keypress_check"
         },
         {
            "id": 377,
            "name": "Keyboard input/Obtain a Y or N response",
            "link": "http://rosettacode.org/wiki/Keyboard_input/Obtain_a_Y_or_N_response"
         },
         {
            "id": 378,
            "name": "Keyboard macros",
            "link": "http://rosettacode.org/wiki/Keyboard_macros"
         },
         {
            "id": 379,
            "name": "Knapsack problem/0-1",
            "link": "http://rosettacode.org/wiki/Knapsack_problem/0-1"
         },
         {
            "id": 380,
            "name": "Knapsack problem/Bounded",
            "link": "http://rosettacode.org/wiki/Knapsack_problem/Bounded"
         },
         {
            "id": 381,
            "name": "Knapsack problem/Continuous",
            "link": "http://rosettacode.org/wiki/Knapsack_problem/Continuous"
         },
         {
            "id": 382,
            "name": "Knapsack problem/Unbounded",
            "link": "http://rosettacode.org/wiki/Knapsack_problem/Unbounded"
         },
         {
            "id": 383,
            "name": "Knight's tour",
            "link": "http://rosettacode.org/wiki/Knight%27s_tour"
         },
         {
            "id": 384,
            "name": "Knuth shuffle",
            "link": "http://rosettacode.org/wiki/Knuth_shuffle"
         },
         {
            "id": 385,
            "name": "Knuth's algorithm S",
            "link": "http://rosettacode.org/wiki/Knuth%27s_algorithm_S"
         },
         {
            "id": 386,
            "name": "Kronecker product",
            "link": "http://rosettacode.org/wiki/Kronecker_product"
         },
         {
            "id": 387,
            "name": "Kronecker product based fractals",
            "link": "http://rosettacode.org/wiki/Kronecker_product_based_fractals"
         },
         {
            "id": 388,
            "name": "Langton's ant",
            "link": "http://rosettacode.org/wiki/Langton%27s_ant"
         },
         {
            "id": 389,
            "name": "Largest int from concatenated ints",
            "link": "http://rosettacode.org/wiki/Largest_int_from_concatenated_ints"
         },
         {
            "id": 390,
            "name": "Last Friday of each month",
            "link": "http://rosettacode.org/wiki/Last_Friday_of_each_month"
         },
         {
            "id": 391,
            "name": "Last letter-first letter",
            "link": "http://rosettacode.org/wiki/Last_letter-first_letter"
         },
         {
            "id": 392,
            "name": "Leap year",
            "link": "http://rosettacode.org/wiki/Leap_year"
         },
         {
            "id": 393,
            "name": "Least common multiple",
            "link": "http://rosettacode.org/wiki/Least_common_multiple"
         },
         {
            "id": 394,
            "name": "Left factorials",
            "link": "http://rosettacode.org/wiki/Left_factorials"
         },
         {
            "id": 395,
            "name": "Leonardo numbers",
            "link": "http://rosettacode.org/wiki/Leonardo_numbers"
         },
         {
            "id": 396,
            "name": "Letter frequency",
            "link": "http://rosettacode.org/wiki/Letter_frequency"
         },
         {
            "id": 397,
            "name": "Levenshtein distance",
            "link": "http://rosettacode.org/wiki/Levenshtein_distance"
         },
         {
            "id": 398,
            "name": "Linear congruential generator",
            "link": "http://rosettacode.org/wiki/Linear_congruential_generator"
         },
         {
            "id": 399,
            "name": "List comprehensions",
            "link": "http://rosettacode.org/wiki/List_comprehensions"
         },
         {
            "id": 400,
            "name": "Literals/Floating point",
            "link": "http://rosettacode.org/wiki/Literals/Floating_point"
         },
   {
      "id": 401,
      "name": "Literals/Integer",
      "link": "http://rosettacode.org/wiki/Literals/Integer"
   },
   {
      "id": 402,
      "name": "Literals/String",
      "link": "http://rosettacode.org/wiki/Literals/String"
   },
   {
      "id": 403,
      "name": "Logical operations",
      "link": "http://rosettacode.org/wiki/Logical_operations"
   },
   {
      "id": 404,
      "name": "Long multiplication",
      "link": "http://rosettacode.org/wiki/Long_multiplication"
   },
   {
      "id": 405,
      "name": "Longest common subsequence",
      "link": "http://rosettacode.org/wiki/Longest_common_subsequence"
   },
   {
      "id": 406,
      "name": "Longest increasing subsequence",
      "link": "http://rosettacode.org/wiki/Longest_increasing_subsequence"
   },
   {
      "id": 407,
      "name": "Longest string challenge",
      "link": "http://rosettacode.org/wiki/Longest_string_challenge"
   },
   {
      "id": 408,
      "name": "Look-and-say sequence",
      "link": "http://rosettacode.org/wiki/Look-and-say_sequence"
   },
   {
      "id": 409,
      "name": "Loop over multiple arrays simultaneously",
      "link": "http://rosettacode.org/wiki/Loop_over_multiple_arrays_simultaneously"
   },
   {
      "id": 410,
      "name": "Loops/Break",
      "link": "http://rosettacode.org/wiki/Loops/Break"
   },
   {
      "id": 411,
      "name": "Loops/Continue",
      "link": "http://rosettacode.org/wiki/Loops/Continue"
   },
   {
      "id": 412,
      "name": "Loops/Do-while",
      "link": "http://rosettacode.org/wiki/Loops/Do-while"
   },
   {
      "id": 413,
      "name": "Loops/Downward for",
      "link": "http://rosettacode.org/wiki/Loops/Downward_for"
   },
   {
      "id": 414,
      "name": "Loops/For",
      "link": "http://rosettacode.org/wiki/Loops/For"
   },
   {
      "id": 415,
      "name": "Loops/For with a specified step",
      "link": "http://rosettacode.org/wiki/Loops/For_with_a_specified_step"
   },
   {
      "id": 416,
      "name": "Loops/Foreach",
      "link": "http://rosettacode.org/wiki/Loops/Foreach"
   },
   {
      "id": 417,
      "name": "Loops/Infinite",
      "link": "http://rosettacode.org/wiki/Loops/Infinite"
   },
   {
      "id": 418,
      "name": "Loops/N plus one half",
      "link": "http://rosettacode.org/wiki/Loops/N_plus_one_half"
   },
   {
      "id": 419,
      "name": "Loops/Nested",
      "link": "http://rosettacode.org/wiki/Loops/Nested"
   },
   {
      "id": 420,
      "name": "Loops/While",
      "link": "http://rosettacode.org/wiki/Loops/While"
   },
   {
      "id": 421,
      "name": "LU decomposition",
      "link": "http://rosettacode.org/wiki/LU_decomposition"
   },
   {
      "id": 422,
      "name": "Lucas-Lehmer test",
      "link": "http://rosettacode.org/wiki/Lucas-Lehmer_test"
   },
   {
      "id": 423,
      "name": "Lucky and even lucky numbers",
      "link": "http://rosettacode.org/wiki/Lucky_and_even_lucky_numbers"
   },
   {
      "id": 424,
      "name": "Ludic numbers",
      "link": "http://rosettacode.org/wiki/Ludic_numbers"
   },
   {
      "id": 425,
      "name": "Luhn test of credit card numbers",
      "link": "http://rosettacode.org/wiki/Luhn_test_of_credit_card_numbers"
   },
   {
      "id": 426,
      "name": "Lychrel numbers",
      "link": "http://rosettacode.org/wiki/Lychrel_numbers"
   },
   {
      "id": 427,
      "name": "LZW compression",
      "link": "http://rosettacode.org/wiki/LZW_compression"
   },
   {
      "id": 428,
      "name": "MAC Vendor Lookup",
      "link": "http://rosettacode.org/wiki/MAC_Vendor_Lookup"
   },
   {
      "id": 429,
      "name": "Machine code",
      "link": "http://rosettacode.org/wiki/Machine_code"
   },
   {
      "id": 430,
      "name": "Mad Libs",
      "link": "http://rosettacode.org/wiki/Mad_Libs"
   },
   {
      "id": 431,
      "name": "Magic squares of doubly even order",
      "link": "http://rosettacode.org/wiki/Magic_squares_of_doubly_even_order"
   },
   {
      "id": 432,
      "name": "Magic squares of odd order",
      "link": "http://rosettacode.org/wiki/Magic_squares_of_odd_order"
   },
   {
      "id": 433,
      "name": "Magic squares of singly even order",
      "link": "http://rosettacode.org/wiki/Magic_squares_of_singly_even_order"
   },
   {
      "id": 434,
      "name": "Main step of GOST 28147-89",
      "link": "http://rosettacode.org/wiki/Main_step_of_GOST_28147-89"
   },
   {
      "id": 435,
      "name": "Make directory path",
      "link": "http://rosettacode.org/wiki/Make_directory_path"
   },
   {
      "id": 436,
      "name": "Man or boy test",
      "link": "http://rosettacode.org/wiki/Man_or_boy_test"
   },
   {
      "id": 437,
      "name": "Mandelbrot set",
      "link": "http://rosettacode.org/wiki/Mandelbrot_set"
   },
   {
      "id": 438,
      "name": "Map range",
      "link": "http://rosettacode.org/wiki/Map_range"
   },
   {
      "id": 439,
      "name": "Matrix arithmetic",
      "link": "http://rosettacode.org/wiki/Matrix_arithmetic"
   },
   {
      "id": 440,
      "name": "Matrix multiplication",
      "link": "http://rosettacode.org/wiki/Matrix_multiplication"
   },
   {
      "id": 441,
      "name": "Matrix transposition",
      "link": "http://rosettacode.org/wiki/Matrix_transposition"
   },
   {
      "id": 442,
      "name": "Matrix-exponentiation operator",
      "link": "http://rosettacode.org/wiki/Matrix-exponentiation_operator"
   },
   {
      "id": 443,
      "name": "Maximum triangle path sum",
      "link": "http://rosettacode.org/wiki/Maximum_triangle_path_sum"
   },
   {
      "id": 444,
      "name": "Maze generation",
      "link": "http://rosettacode.org/wiki/Maze_generation"
   },
   {
      "id": 445,
      "name": "Maze solving",
      "link": "http://rosettacode.org/wiki/Maze_solving"
   },
   {
      "id": 446,
      "name": "MD4",
      "link": "http://rosettacode.org/wiki/MD4"
   },
   {
      "id": 447,
      "name": "MD5",
      "link": "http://rosettacode.org/wiki/MD5"
   },
   {
      "id": 448,
      "name": "MD5/Implementation",
      "link": "http://rosettacode.org/wiki/MD5/Implementation"
   },
   {
      "id": 449,
      "name": "Median filter",
      "link": "http://rosettacode.org/wiki/Median_filter"
   },
   {
      "id": 450,
      "name": "Memory allocation",
      "link": "http://rosettacode.org/wiki/Memory_allocation"
   },
   {
      "id": 451,
      "name": "Memory layout of a data structure",
      "link": "http://rosettacode.org/wiki/Memory_layout_of_a_data_structure"
   },
   {
      "id": 452,
      "name": "Menu",
      "link": "http://rosettacode.org/wiki/Menu"
   },
   {
      "id": 453,
      "name": "Metaprogramming",
      "link": "http://rosettacode.org/wiki/Metaprogramming"
   },
   {
      "id": 454,
      "name": "Metered concurrency",
      "link": "http://rosettacode.org/wiki/Metered_concurrency"
   },
   {
      "id": 455,
      "name": "Metronome",
      "link": "http://rosettacode.org/wiki/Metronome"
   },
   {
      "id": 456,
      "name": "Middle three digits",
      "link": "http://rosettacode.org/wiki/Middle_three_digits"
   },
   {
      "id": 457,
      "name": "Miller–Rabin primality test",
      "link": "http://rosettacode.org/wiki/Miller%E2%80%93Rabin_primality_test"
   },
   {
      "id": 458,
      "name": "Minesweeper game",
      "link": "http://rosettacode.org/wiki/Minesweeper_game"
   },
   {
      "id": 459,
      "name": "Modular exponentiation",
      "link": "http://rosettacode.org/wiki/Modular_exponentiation"
   },
   {
      "id": 460,
      "name": "Modular inverse",
      "link": "http://rosettacode.org/wiki/Modular_inverse"
   },
   {
      "id": 461,
      "name": "Monte Carlo methods",
      "link": "http://rosettacode.org/wiki/Monte_Carlo_methods"
   },
   {
      "id": 462,
      "name": "Monty Hall problem",
      "link": "http://rosettacode.org/wiki/Monty_Hall_problem"
   },
   {
      "id": 463,
      "name": "Morse code",
      "link": "http://rosettacode.org/wiki/Morse_code"
   },
   {
      "id": 464,
      "name": "Mouse position",
      "link": "http://rosettacode.org/wiki/Mouse_position"
   },
   {
      "id": 465,
      "name": "Move-to-front algorithm",
      "link": "http://rosettacode.org/wiki/Move-to-front_algorithm"
   },
   {
      "id": 466,
      "name": "Multifactorial",
      "link": "http://rosettacode.org/wiki/Multifactorial"
   },
   {
      "id": 467,
      "name": "Multiple distinct objects",
      "link": "http://rosettacode.org/wiki/Multiple_distinct_objects"
   },
   {
      "id": 468,
      "name": "Multiple regression",
      "link": "http://rosettacode.org/wiki/Multiple_regression"
   },
   {
      "id": 469,
      "name": "Multiplication tables",
      "link": "http://rosettacode.org/wiki/Multiplication_tables"
   },
   {
      "id": 470,
      "name": "Multiplicative order",
      "link": "http://rosettacode.org/wiki/Multiplicative_order"
   },
   {
      "id": 471,
      "name": "Multisplit",
      "link": "http://rosettacode.org/wiki/Multisplit"
   },
   {
      "id": 472,
      "name": "Munchausen numbers",
      "link": "http://rosettacode.org/wiki/Munchausen_numbers"
   },
   {
      "id": 473,
      "name": "Munching squares",
      "link": "http://rosettacode.org/wiki/Munching_squares"
   },
   {
      "id": 474,
      "name": "Mutual recursion",
      "link": "http://rosettacode.org/wiki/Mutual_recursion"
   },
   {
      "id": 475,
      "name": "N'th",
      "link": "http://rosettacode.org/wiki/N%27th"
   },
   {
      "id": 476,
      "name": "N-queens problem",
      "link": "http://rosettacode.org/wiki/N-queens_problem"
   },
   {
      "id": 477,
      "name": "Named parameters",
      "link": "http://rosettacode.org/wiki/Named_parameters"
   },
   {
      "id": 478,
      "name": "Naming conventions",
      "link": "http://rosettacode.org/wiki/Naming_conventions"
   },
   {
      "id": 479,
      "name": "Narcissist",
      "link": "http://rosettacode.org/wiki/Narcissist"
   },
   {
      "id": 480,
      "name": "Narcissistic decimal number",
      "link": "http://rosettacode.org/wiki/Narcissistic_decimal_number"
   },
   {
      "id": 481,
      "name": "Natural sorting",
      "link": "http://rosettacode.org/wiki/Natural_sorting"
   },
   {
      "id": 482,
      "name": "Nautical bell",
      "link": "http://rosettacode.org/wiki/Nautical_bell"
   },
   {
      "id": 483,
      "name": "Negative base numbers",
      "link": "http://rosettacode.org/wiki/Negative_base_numbers"
   },
   {
      "id": 484,
      "name": "Nested function",
      "link": "http://rosettacode.org/wiki/Nested_function"
   },
   {
      "id": 485,
      "name": "Non-continuous subsequences",
      "link": "http://rosettacode.org/wiki/Non-continuous_subsequences"
   },
   {
      "id": 486,
      "name": "Non-decimal radices/Convert",
      "link": "http://rosettacode.org/wiki/Non-decimal_radices/Convert"
   },
   {
      "id": 487,
      "name": "Non-decimal radices/Input",
      "link": "http://rosettacode.org/wiki/Non-decimal_radices/Input"
   },
   {
      "id": 488,
      "name": "Non-decimal radices/Output",
      "link": "http://rosettacode.org/wiki/Non-decimal_radices/Output"
   },
   {
      "id": 489,
      "name": "Nonoblock",
      "link": "http://rosettacode.org/wiki/Nonoblock"
   },
   {
      "id": 490,
      "name": "Nonogram solver",
      "link": "http://rosettacode.org/wiki/Nonogram_solver"
   },
   {
      "id": 491,
      "name": "Nth root",
      "link": "http://rosettacode.org/wiki/Nth_root"
   },
   {
      "id": 492,
      "name": "Null object",
      "link": "http://rosettacode.org/wiki/Null_object"
   },
   {
      "id": 493,
      "name": "Number names",
      "link": "http://rosettacode.org/wiki/Number_names"
   },
   {
      "id": 494,
      "name": "Number reversal game",
      "link": "http://rosettacode.org/wiki/Number_reversal_game"
   },
   {
      "id": 495,
      "name": "Numeric error propagation",
      "link": "http://rosettacode.org/wiki/Numeric_error_propagation"
   },
   {
      "id": 496,
      "name": "Numerical integration",
      "link": "http://rosettacode.org/wiki/Numerical_integration"
   },
   {
      "id": 497,
      "name": "Numerical integration/Gauss-Legendre Quadrature",
      "link": "http://rosettacode.org/wiki/Numerical_integration/Gauss-Legendre_Quadrature"
   },
   {
      "id": 498,
      "name": "Object serialization",
      "link": "http://rosettacode.org/wiki/Object_serialization"
   },
   {
      "id": 499,
      "name": "Odd word problem",
      "link": "http://rosettacode.org/wiki/Odd_word_problem"
   },
   {
      "id": 500,
      "name": "Old lady swallowed a fly",
      "link": "http://rosettacode.org/wiki/Old_lady_swallowed_a_fly"
   },
   {
      "id": 501,
      "name": "OLE Automation",
      "link": "http://rosettacode.org/wiki/OLE_Automation"
   },
   {
      "id": 502,
      "name": "One of n lines in a file",
      "link": "http://rosettacode.org/wiki/One_of_n_lines_in_a_file"
   },
   {
      "id": 503,
      "name": "One-dimensional cellular automata",
      "link": "http://rosettacode.org/wiki/One-dimensional_cellular_automata"
   },
   {
      "id": 504,
      "name": "OpenGL",
      "link": "http://rosettacode.org/wiki/OpenGL"
   },
   {
      "id": 505,
      "name": "Operator precedence",
      "link": "http://rosettacode.org/wiki/Operator_precedence"
   },
   {
      "id": 506,
      "name": "Optional parameters",
      "link": "http://rosettacode.org/wiki/Optional_parameters"
   },
   {
      "id": 507,
      "name": "Order disjoint list items",
      "link": "http://rosettacode.org/wiki/Order_disjoint_list_items"
   },
   {
      "id": 508,
      "name": "Order two numerical lists",
      "link": "http://rosettacode.org/wiki/Order_two_numerical_lists"
   },
   {
      "id": 509,
      "name": "Ordered Partitions",
      "link": "http://rosettacode.org/wiki/Ordered_Partitions"
   },
   {
      "id": 510,
      "name": "Ordered words",
      "link": "http://rosettacode.org/wiki/Ordered_words"
   },
   {
      "id": 511,
      "name": "Palindrome detection",
      "link": "http://rosettacode.org/wiki/Palindrome_detection"
   },
   {
      "id": 512,
      "name": "Pangram checker",
      "link": "http://rosettacode.org/wiki/Pangram_checker"
   },
   {
      "id": 513,
      "name": "Paraffins",
      "link": "http://rosettacode.org/wiki/Paraffins"
   },
   {
      "id": 514,
      "name": "Parallel Brute Force",
      "link": "http://rosettacode.org/wiki/Parallel_Brute_Force"
   },
   {
      "id": 515,
      "name": "Parallel calculations",
      "link": "http://rosettacode.org/wiki/Parallel_calculations"
   },
   {
      "id": 516,
      "name": "Parametric polymorphism",
      "link": "http://rosettacode.org/wiki/Parametric_polymorphism"
   },
   {
      "id": 517,
      "name": "Parametrized SQL statement",
      "link": "http://rosettacode.org/wiki/Parametrized_SQL_statement"
   },
   {
      "id": 518,
      "name": "Parse an IP Address",
      "link": "http://rosettacode.org/wiki/Parse_an_IP_Address"
   },
   {
      "id": 519,
      "name": "Parsing/RPN calculator algorithm",
      "link": "http://rosettacode.org/wiki/Parsing/RPN_calculator_algorithm"
   },
   {
      "id": 520,
      "name": "Parsing/RPN to infix conversion",
      "link": "http://rosettacode.org/wiki/Parsing/RPN_to_infix_conversion"
   },
   {
      "id": 521,
      "name": "Parsing/Shunting-yard algorithm",
      "link": "http://rosettacode.org/wiki/Parsing/Shunting-yard_algorithm"
   },
   {
      "id": 522,
      "name": "Partial function application",
      "link": "http://rosettacode.org/wiki/Partial_function_application"
   },
   {
      "id": 523,
      "name": "Partition an integer X into N primes",
      "link": "http://rosettacode.org/wiki/Partition_an_integer_X_into_N_primes"
   },
   {
      "id": 524,
      "name": "Pascal matrix generation",
      "link": "http://rosettacode.org/wiki/Pascal_matrix_generation"
   },
   {
      "id": 525,
      "name": "Pascal's triangle",
      "link": "http://rosettacode.org/wiki/Pascal%27s_triangle"
   },
   {
      "id": 526,
      "name": "Pascal's triangle/Puzzle",
      "link": "http://rosettacode.org/wiki/Pascal%27s_triangle/Puzzle"
   },
   {
      "id": 527,
      "name": "Password generator",
      "link": "http://rosettacode.org/wiki/Password_generator"
   },
   {
      "id": 528,
      "name": "Pathological floating point problems",
      "link": "http://rosettacode.org/wiki/Pathological_floating_point_problems"
   },
   {
      "id": 529,
      "name": "Pattern matching",
      "link": "http://rosettacode.org/wiki/Pattern_matching"
   },
   {
      "id": 530,
      "name": "Penney's game",
      "link": "http://rosettacode.org/wiki/Penney%27s_game"
   },
   {
      "id": 531,
      "name": "Pentagram",
      "link": "http://rosettacode.org/wiki/Pentagram"
   },
   {
      "id": 532,
      "name": "Percentage difference between images",
      "link": "http://rosettacode.org/wiki/Percentage_difference_between_images"
   },
   {
      "id": 533,
      "name": "Percolation/Bond percolation",
      "link": "http://rosettacode.org/wiki/Percolation/Bond_percolation"
   },
   {
      "id": 534,
      "name": "Percolation/Mean cluster density",
      "link": "http://rosettacode.org/wiki/Percolation/Mean_cluster_density"
   },
   {
      "id": 535,
      "name": "Percolation/Mean run density",
      "link": "http://rosettacode.org/wiki/Percolation/Mean_run_density"
   },
   {
      "id": 536,
      "name": "Percolation/Site percolation",
      "link": "http://rosettacode.org/wiki/Percolation/Site_percolation"
   },
   {
      "id": 537,
      "name": "Perfect numbers",
      "link": "http://rosettacode.org/wiki/Perfect_numbers"
   },
   {
      "id": 538,
      "name": "Perfect shuffle",
      "link": "http://rosettacode.org/wiki/Perfect_shuffle"
   },
   {
      "id": 539,
      "name": "Permutation test",
      "link": "http://rosettacode.org/wiki/Permutation_test"
   },
   {
      "id": 540,
      "name": "Permutations",
      "link": "http://rosettacode.org/wiki/Permutations"
   },
   {
      "id": 541,
      "name": "Permutations by swapping",
      "link": "http://rosettacode.org/wiki/Permutations_by_swapping"
   },
   {
      "id": 542,
      "name": "Permutations/Derangements",
      "link": "http://rosettacode.org/wiki/Permutations/Derangements"
   },
   {
      "id": 543,
      "name": "Permutations/Rank of a permutation",
      "link": "http://rosettacode.org/wiki/Permutations/Rank_of_a_permutation"
   },
   {
      "id": 544,
      "name": "Pernicious numbers",
      "link": "http://rosettacode.org/wiki/Pernicious_numbers"
   },
   {
      "id": 545,
      "name": "Phrase reversals",
      "link": "http://rosettacode.org/wiki/Phrase_reversals"
   },
   {
      "id": 546,
      "name": "Pi",
      "link": "http://rosettacode.org/wiki/Pi"
   },
   {
      "id": 547,
      "name": "Pick random element",
      "link": "http://rosettacode.org/wiki/Pick_random_element"
   },
   {
      "id": 548,
      "name": "Pig the dice game",
      "link": "http://rosettacode.org/wiki/Pig_the_dice_game"
   },
   {
      "id": 549,
      "name": "Pig the dice game/Player",
      "link": "http://rosettacode.org/wiki/Pig_the_dice_game/Player"
   },
   {
      "id": 550,
      "name": "Pinstripe/Display",
      "link": "http://rosettacode.org/wiki/Pinstripe/Display"
   },
   {
      "id": 551,
      "name": "Pinstripe/Printer",
      "link": "http://rosettacode.org/wiki/Pinstripe/Printer"
   },
   {
      "id": 552,
      "name": "Plasma effect",
      "link": "http://rosettacode.org/wiki/Plasma_effect"
   },
   {
      "id": 553,
      "name": "Play recorded sounds",
      "link": "http://rosettacode.org/wiki/Play_recorded_sounds"
   },
   {
      "id": 554,
      "name": "Playing cards",
      "link": "http://rosettacode.org/wiki/Playing_cards"
   },
   {
      "id": 555,
      "name": "Plot coordinate pairs",
      "link": "http://rosettacode.org/wiki/Plot_coordinate_pairs"
   },
   {
      "id": 556,
      "name": "Pointers and references",
      "link": "http://rosettacode.org/wiki/Pointers_and_references"
   },
   {
      "id": 557,
      "name": "Poker hand analyser",
      "link": "http://rosettacode.org/wiki/Poker_hand_analyser"
   },
   {
      "id": 558,
      "name": "Polymorphic copy",
      "link": "http://rosettacode.org/wiki/Polymorphic_copy"
   },
   {
      "id": 559,
      "name": "Polymorphism",
      "link": "http://rosettacode.org/wiki/Polymorphism"
   },
   {
      "id": 560,
      "name": "Polynomial long division",
      "link": "http://rosettacode.org/wiki/Polynomial_long_division"
   },
   {
      "id": 561,
      "name": "Polynomial regression",
      "link": "http://rosettacode.org/wiki/Polynomial_regression"
   },
   {
      "id": 562,
      "name": "Polyspiral",
      "link": "http://rosettacode.org/wiki/Polyspiral"
   },
   {
      "id": 563,
      "name": "Population count",
      "link": "http://rosettacode.org/wiki/Population_count"
   },
   {
      "id": 564,
      "name": "Power set",
      "link": "http://rosettacode.org/wiki/Power_set"
   },
   {
      "id": 565,
      "name": "Pragmatic directives",
      "link": "http://rosettacode.org/wiki/Pragmatic_directives"
   },
   {
      "id": 566,
      "name": "Price fraction",
      "link": "http://rosettacode.org/wiki/Price_fraction"
   },
   {
      "id": 567,
      "name": "Primality by trial division",
      "link": "http://rosettacode.org/wiki/Primality_by_trial_division"
   },
   {
      "id": 568,
      "name": "Prime decomposition",
      "link": "http://rosettacode.org/wiki/Prime_decomposition"
   },
   {
      "id": 569,
      "name": "Primes - allocate descendants to their ancestors",
      "link": "http://rosettacode.org/wiki/Primes_-_allocate_descendants_to_their_ancestors"
   },
   {
      "id": 570,
      "name": "Primorial numbers",
      "link": "http://rosettacode.org/wiki/Primorial_numbers"
   },
   {
      "id": 571,
      "name": "Priority queue",
      "link": "http://rosettacode.org/wiki/Priority_queue"
   },
   {
      "id": 572,
      "name": "Probabilistic choice",
      "link": "http://rosettacode.org/wiki/Probabilistic_choice"
   },
   {
      "id": 573,
      "name": "Problem of Apollonius",
      "link": "http://rosettacode.org/wiki/Problem_of_Apollonius"
   },
   {
      "id": 574,
      "name": "Program name",
      "link": "http://rosettacode.org/wiki/Program_name"
   },
   {
      "id": 575,
      "name": "Program termination",
      "link": "http://rosettacode.org/wiki/Program_termination"
   },
   {
      "id": 576,
      "name": "Pythagoras tree",
      "link": "http://rosettacode.org/wiki/Pythagoras_tree"
   },
   {
      "id": 577,
      "name": "Pythagorean quadruples",
      "link": "http://rosettacode.org/wiki/Pythagorean_quadruples"
   },
   {
      "id": 578,
      "name": "Pythagorean triples",
      "link": "http://rosettacode.org/wiki/Pythagorean_triples"
   },
   {
      "id": 579,
      "name": "QR decomposition",
      "link": "http://rosettacode.org/wiki/QR_decomposition"
   },
   {
      "id": 580,
      "name": "Quaternion type",
      "link": "http://rosettacode.org/wiki/Quaternion_type"
   },
   {
      "id": 581,
      "name": "Queue/Definition",
      "link": "http://rosettacode.org/wiki/Queue/Definition"
   },
   {
      "id": 582,
      "name": "Queue/Usage",
      "link": "http://rosettacode.org/wiki/Queue/Usage"
   },
   {
      "id": 583,
      "name": "Quickselect algorithm",
      "link": "http://rosettacode.org/wiki/Quickselect_algorithm"
   },
   {
      "id": 584,
      "name": "Quine",
      "link": "http://rosettacode.org/wiki/Quine"
   },
   {
      "id": 585,
      "name": "Ramer-Douglas-Peucker line simplification",
      "link": "http://rosettacode.org/wiki/Ramer-Douglas-Peucker_line_simplification"
   },
   {
      "id": 586,
      "name": "Random number generator (device)",
      "link": "http://rosettacode.org/wiki/Random_number_generator_(device)"
   },
   {
      "id": 587,
      "name": "Random number generator (included)",
      "link": "http://rosettacode.org/wiki/Random_number_generator_(included)"
   },
   {
      "id": 588,
      "name": "Random numbers",
      "link": "http://rosettacode.org/wiki/Random_numbers"
   },
   {
      "id": 589,
      "name": "Range expansion",
      "link": "http://rosettacode.org/wiki/Range_expansion"
   },
   {
      "id": 590,
      "name": "Range extraction",
      "link": "http://rosettacode.org/wiki/Range_extraction"
   },
   {
      "id": 591,
      "name": "Ranking methods",
      "link": "http://rosettacode.org/wiki/Ranking_methods"
   },
   {
      "id": 592,
      "name": "Rate counter",
      "link": "http://rosettacode.org/wiki/Rate_counter"
   },
   {
      "id": 593,
      "name": "Ray-casting algorithm",
      "link": "http://rosettacode.org/wiki/Ray-casting_algorithm"
   },
   {
      "id": 594,
      "name": "RCRPG",
      "link": "http://rosettacode.org/wiki/RCRPG"
   },
   {
      "id": 595,
      "name": "Read a configuration file",
      "link": "http://rosettacode.org/wiki/Read_a_configuration_file"
   },
   {
      "id": 596,
      "name": "Read a file line by line",
      "link": "http://rosettacode.org/wiki/Read_a_file_line_by_line"
   },
   {
      "id": 597,
      "name": "Read a specific line from a file",
      "link": "http://rosettacode.org/wiki/Read_a_specific_line_from_a_file"
   },
   {
      "id": 598,
      "name": "Read entire file",
      "link": "http://rosettacode.org/wiki/Read_entire_file"
   },
   {
      "id": 599,
      "name": "Real constants and functions",
      "link": "http://rosettacode.org/wiki/Real_constants_and_functions"
   },
   {
      "id": 600,
      "name": "Record sound",
      "link": "http://rosettacode.org/wiki/Record_sound"
   },
   {
      "id": 601,
      "name": "Reduced row echelon form",
      "link": "http://rosettacode.org/wiki/Reduced_row_echelon_form"
   },
   {
      "id": 602,
      "name": "Reflection/Get source",
      "link": "http://rosettacode.org/wiki/Reflection/Get_source"
   },
   {
      "id": 603,
      "name": "Reflection/List methods",
      "link": "http://rosettacode.org/wiki/Reflection/List_methods"
   },
   {
      "id": 604,
      "name": "Reflection/List properties",
      "link": "http://rosettacode.org/wiki/Reflection/List_properties"
   },
   {
      "id": 605,
      "name": "Regular expressions",
      "link": "http://rosettacode.org/wiki/Regular_expressions"
   },
   {
      "id": 606,
      "name": "Remove duplicate elements",
      "link": "http://rosettacode.org/wiki/Remove_duplicate_elements"
   },
   {
      "id": 607,
      "name": "Remove lines from a file",
      "link": "http://rosettacode.org/wiki/Remove_lines_from_a_file"
   },
   {
      "id": 608,
      "name": "Rename a file",
      "link": "http://rosettacode.org/wiki/Rename_a_file"
   },
   {
      "id": 609,
      "name": "Rendezvous",
      "link": "http://rosettacode.org/wiki/Rendezvous"
   },
   {
      "id": 610,
      "name": "Rep-string",
      "link": "http://rosettacode.org/wiki/Rep-string"
   },
   {
      "id": 611,
      "name": "Repeat a string",
      "link": "http://rosettacode.org/wiki/Repeat_a_string"
   },
   {
      "id": 612,
      "name": "Resistor mesh",
      "link": "http://rosettacode.org/wiki/Resistor_mesh"
   },
   {
      "id": 613,
      "name": "Respond to an unknown method call",
      "link": "http://rosettacode.org/wiki/Respond_to_an_unknown_method_call"
   },
   {
      "id": 614,
      "name": "Retrieve and search chat history",
      "link": "http://rosettacode.org/wiki/Retrieve_and_search_chat_history"
   },
   {
      "id": 615,
      "name": "Return multiple values",
      "link": "http://rosettacode.org/wiki/Return_multiple_values"
   },
   {
      "id": 616,
      "name": "Reverse a string",
      "link": "http://rosettacode.org/wiki/Reverse_a_string"
   },
   {
      "id": 617,
      "name": "Reverse words in a string",
      "link": "http://rosettacode.org/wiki/Reverse_words_in_a_string"
   },
   {
      "id": 618,
      "name": "RIPEMD-160",
      "link": "http://rosettacode.org/wiki/RIPEMD-160"
   },
   {
      "id": 619,
      "name": "Rock-paper-scissors",
      "link": "http://rosettacode.org/wiki/Rock-paper-scissors"
   },
   {
      "id": 620,
      "name": "Roman numerals/Decode",
      "link": "http://rosettacode.org/wiki/Roman_numerals/Decode"
   },
   {
      "id": 621,
      "name": "Roman numerals/Encode",
      "link": "http://rosettacode.org/wiki/Roman_numerals/Encode"
   },
   {
      "id": 622,
      "name": "Roots of a function",
      "link": "http://rosettacode.org/wiki/Roots_of_a_function"
   },
   {
      "id": 623,
      "name": "Roots of a quadratic function",
      "link": "http://rosettacode.org/wiki/Roots_of_a_quadratic_function"
   },
   {
      "id": 624,
      "name": "Roots of unity",
      "link": "http://rosettacode.org/wiki/Roots_of_unity"
   },
   {
      "id": 625,
      "name": "Rosetta Code/Count examples",
      "link": "http://rosettacode.org/wiki/Rosetta_Code/Count_examples"
   },
   {
      "id": 626,
      "name": "Rosetta Code/Find bare lang tags",
      "link": "http://rosettacode.org/wiki/Rosetta_Code/Find_bare_lang_tags"
   },
   {
      "id": 627,
      "name": "Rosetta Code/Find unimplemented tasks",
      "link": "http://rosettacode.org/wiki/Rosetta_Code/Find_unimplemented_tasks"
   },
   {
      "id": 628,
      "name": "Rosetta Code/Fix code tags",
      "link": "http://rosettacode.org/wiki/Rosetta_Code/Fix_code_tags"
   },
   {
      "id": 629,
      "name": "Rosetta Code/Rank languages by popularity",
      "link": "http://rosettacode.org/wiki/Rosetta_Code/Rank_languages_by_popularity"
   },
   {
      "id": 630,
      "name": "Rot-13",
      "link": "http://rosettacode.org/wiki/Rot-13"
   },
   {
      "id": 631,
      "name": "RSA code",
      "link": "http://rosettacode.org/wiki/RSA_code"
   },
   {
      "id": 632,
      "name": "Run-length encoding",
      "link": "http://rosettacode.org/wiki/Run-length_encoding"
   },
   {
      "id": 633,
      "name": "Runge-Kutta method",
      "link": "http://rosettacode.org/wiki/Runge-Kutta_method"
   },
   {
      "id": 634,
      "name": "Runtime evaluation",
      "link": "http://rosettacode.org/wiki/Runtime_evaluation"
   },
   {
      "id": 635,
      "name": "Runtime evaluation/In an environment",
      "link": "http://rosettacode.org/wiki/Runtime_evaluation/In_an_environment"
   },
   {
      "id": 636,
      "name": "S-Expressions",
      "link": "http://rosettacode.org/wiki/S-Expressions"
   },
   {
      "id": 637,
      "name": "Safe addition",
      "link": "http://rosettacode.org/wiki/Safe_addition"
   },
   {
      "id": 638,
      "name": "Sailors, coconuts and a monkey problem",
      "link": "http://rosettacode.org/wiki/Sailors,_coconuts_and_a_monkey_problem"
   },
   {
      "id": 639,
      "name": "Same Fringe",
      "link": "http://rosettacode.org/wiki/Same_Fringe"
   },
   {
      "id": 640,
      "name": "Scope modifiers",
      "link": "http://rosettacode.org/wiki/Scope_modifiers"
   },
   {
      "id": 641,
      "name": "Scope/Function names and labels",
      "link": "http://rosettacode.org/wiki/Scope/Function_names_and_labels"
   },
   {
      "id": 642,
      "name": "Search a list",
      "link": "http://rosettacode.org/wiki/Search_a_list"
   },
   {
      "id": 643,
      "name": "Search a list of records",
      "link": "http://rosettacode.org/wiki/Search_a_list_of_records"
   },
   {
      "id": 644,
      "name": "Secure temporary file",
      "link": "http://rosettacode.org/wiki/Secure_temporary_file"
   },
   {
      "id": 645,
      "name": "SEDOLs",
      "link": "http://rosettacode.org/wiki/SEDOLs"
   },
   {
      "id": 646,
      "name": "Self-describing numbers",
      "link": "http://rosettacode.org/wiki/Self-describing_numbers"
   },
   {
      "id": 647,
      "name": "Self-referential sequence",
      "link": "http://rosettacode.org/wiki/Self-referential_sequence"
   },
   {
      "id": 648,
      "name": "Semiprime",
      "link": "http://rosettacode.org/wiki/Semiprime"
   },
   {
      "id": 649,
      "name": "Semordnilap",
      "link": "http://rosettacode.org/wiki/Semordnilap"
   },
   {
      "id": 650,
      "name": "Send an unknown method call",
      "link": "http://rosettacode.org/wiki/Send_an_unknown_method_call"
   },
   {
      "id": 651,
      "name": "Send email",
      "link": "http://rosettacode.org/wiki/Send_email"
   },
   {
      "id": 652,
      "name": "Sequence of non-squares",
      "link": "http://rosettacode.org/wiki/Sequence_of_non-squares"
   },
   {
      "id": 653,
      "name": "Sequence of primes by Trial Division",
      "link": "http://rosettacode.org/wiki/Sequence_of_primes_by_Trial_Division"
   },
   {
      "id": 654,
      "name": "Set",
      "link": "http://rosettacode.org/wiki/Set"
   },
   {
      "id": 655,
      "name": "Set consolidation",
      "link": "http://rosettacode.org/wiki/Set_consolidation"
   },
   {
      "id": 656,
      "name": "Set of real numbers",
      "link": "http://rosettacode.org/wiki/Set_of_real_numbers"
   },
   {
      "id": 657,
      "name": "Set puzzle",
      "link": "http://rosettacode.org/wiki/Set_puzzle"
   },
   {
      "id": 658,
      "name": "Seven-sided dice from five-sided dice",
      "link": "http://rosettacode.org/wiki/Seven-sided_dice_from_five-sided_dice"
   },
   {
      "id": 659,
      "name": "SHA-1",
      "link": "http://rosettacode.org/wiki/SHA-1"
   },
   {
      "id": 660,
      "name": "SHA-256",
      "link": "http://rosettacode.org/wiki/SHA-256"
   },
   {
      "id": 661,
      "name": "Shell one-liner",
      "link": "http://rosettacode.org/wiki/Shell_one-liner"
   },
   {
      "id": 662,
      "name": "Shoelace formula for polygonal area",
      "link": "http://rosettacode.org/wiki/Shoelace_formula_for_polygonal_area"
   },
   {
      "id": 663,
      "name": "Short-circuit evaluation",
      "link": "http://rosettacode.org/wiki/Short-circuit_evaluation"
   },
   {
      "id": 664,
      "name": "Show the epoch",
      "link": "http://rosettacode.org/wiki/Show_the_epoch"
   },
   {
      "id": 665,
      "name": "Sierpinski carpet",
      "link": "http://rosettacode.org/wiki/Sierpinski_carpet"
   },
   {
      "id": 666,
      "name": "Sierpinski pentagon",
      "link": "http://rosettacode.org/wiki/Sierpinski_pentagon"
   },
   {
      "id": 667,
      "name": "Sierpinski triangle",
      "link": "http://rosettacode.org/wiki/Sierpinski_triangle"
   },
   {
      "id": 668,
      "name": "Sierpinski triangle/Graphical",
      "link": "http://rosettacode.org/wiki/Sierpinski_triangle/Graphical"
   },
   {
      "id": 669,
      "name": "Sieve of Eratosthenes",
      "link": "http://rosettacode.org/wiki/Sieve_of_Eratosthenes"
   },
   {
      "id": 670,
      "name": "Simple database",
      "link": "http://rosettacode.org/wiki/Simple_database"
   },
   {
      "id": 671,
      "name": "Simple windowed application",
      "link": "http://rosettacode.org/wiki/Simple_windowed_application"
   },
   {
      "id": 672,
      "name": "Simulate input/Keyboard",
      "link": "http://rosettacode.org/wiki/Simulate_input/Keyboard"
   },
   {
      "id": 673,
      "name": "Simulate input/Mouse",
      "link": "http://rosettacode.org/wiki/Simulate_input/Mouse"
   },
   {
      "id": 674,
      "name": "Singleton",
      "link": "http://rosettacode.org/wiki/Singleton"
   },
   {
      "id": 675,
      "name": "Singly-linked list/Element definition",
      "link": "http://rosettacode.org/wiki/Singly-linked_list/Element_definition"
   },
   {
      "id": 676,
      "name": "Singly-linked list/Element insertion",
      "link": "http://rosettacode.org/wiki/Singly-linked_list/Element_insertion"
   },
   {
      "id": 677,
      "name": "Singly-linked list/Traversal",
      "link": "http://rosettacode.org/wiki/Singly-linked_list/Traversal"
   },
   {
      "id": 678,
      "name": "Sleep",
      "link": "http://rosettacode.org/wiki/Sleep"
   },
   {
      "id": 679,
      "name": "Smith numbers",
      "link": "http://rosettacode.org/wiki/Smith_numbers"
   },
   {
      "id": 680,
      "name": "SOAP",
      "link": "http://rosettacode.org/wiki/SOAP"
   },
   {
      "id": 681,
      "name": "Sockets",
      "link": "http://rosettacode.org/wiki/Sockets"
   },
   {
      "id": 682,
      "name": "Sokoban",
      "link": "http://rosettacode.org/wiki/Sokoban"
   },
   {
      "id": 683,
      "name": "Solve a Hidato puzzle",
      "link": "http://rosettacode.org/wiki/Solve_a_Hidato_puzzle"
   },
   {
      "id": 684,
      "name": "Solve a Holy Knight's tour",
      "link": "http://rosettacode.org/wiki/Solve_a_Holy_Knight%27s_tour"
   },
   {
      "id": 685,
      "name": "Solve a Hopido puzzle",
      "link": "http://rosettacode.org/wiki/Solve_a_Hopido_puzzle"
   },
   {
      "id": 686,
      "name": "Solve a Numbrix puzzle",
      "link": "http://rosettacode.org/wiki/Solve_a_Numbrix_puzzle"
   },
   {
      "id": 687,
      "name": "Solve the no connection puzzle",
      "link": "http://rosettacode.org/wiki/Solve_the_no_connection_puzzle"
   },
   {
      "id": 688,
      "name": "Sort a list of object identifiers",
      "link": "http://rosettacode.org/wiki/Sort_a_list_of_object_identifiers"
   },
   {
      "id": 689,
      "name": "Sort an array of composite structures",
      "link": "http://rosettacode.org/wiki/Sort_an_array_of_composite_structures"
   },
   {
      "id": 690,
      "name": "Sort an integer array",
      "link": "http://rosettacode.org/wiki/Sort_an_integer_array"
   },
   {
      "id": 691,
      "name": "Sort disjoint sublist",
      "link": "http://rosettacode.org/wiki/Sort_disjoint_sublist"
   },
   {
      "id": 692,
      "name": "Sort stability",
      "link": "http://rosettacode.org/wiki/Sort_stability"
   },
   {
      "id": 693,
      "name": "Sort three variables",
      "link": "http://rosettacode.org/wiki/Sort_three_variables"
   },
   {
      "id": 694,
      "name": "Sort using a custom comparator",
      "link": "http://rosettacode.org/wiki/Sort_using_a_custom_comparator"
   },
   {
      "id": 695,
      "name": "Sorting algorithms/Bead sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Bead_sort"
   },
   {
      "id": 696,
      "name": "Sorting algorithms/Bogosort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Bogosort"
   },
   {
      "id": 697,
      "name": "Sorting algorithms/Bubble sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort"
   },
   {
      "id": 698,
      "name": "Sorting algorithms/Cocktail sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Cocktail_sort"
   },
   {
      "id": 699,
      "name": "Sorting algorithms/Comb sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Comb_sort"
   },
   {
      "id": 700,
      "name": "Sorting algorithms/Counting sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Counting_sort"
   },
   {
      "id": 701,
      "name": "Sorting algorithms/Gnome sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Gnome_sort"
   },
   {
      "id": 702,
      "name": "Sorting algorithms/Heapsort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Heapsort"
   },
   {
      "id": 703,
      "name": "Sorting algorithms/Insertion sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Insertion_sort"
   },
   {
      "id": 704,
      "name": "Sorting algorithms/Merge sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Merge_sort"
   },
   {
      "id": 705,
      "name": "Sorting algorithms/Pancake sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Pancake_sort"
   },
   {
      "id": 706,
      "name": "Sorting algorithms/Permutation sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Permutation_sort"
   },
   {
      "id": 707,
      "name": "Sorting algorithms/Quicksort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Quicksort"
   },
   {
      "id": 708,
      "name": "Sorting algorithms/Radix sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Radix_sort"
   },
   {
      "id": 709,
      "name": "Sorting algorithms/Selection sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Selection_sort"
   },
   {
      "id": 710,
      "name": "Sorting algorithms/Shell sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Shell_sort"
   },
   {
      "id": 711,
      "name": "Sorting algorithms/Sleep sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort"
   },
   {
      "id": 712,
      "name": "Sorting algorithms/Stooge sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Stooge_sort"
   },
   {
      "id": 713,
      "name": "Sorting algorithms/Strand sort",
      "link": "http://rosettacode.org/wiki/Sorting_algorithms/Strand_sort"
   },
   {
      "id": 714,
      "name": "Soundex",
      "link": "http://rosettacode.org/wiki/Soundex"
   },
   {
      "id": 715,
      "name": "Sparkline in unicode",
      "link": "http://rosettacode.org/wiki/Sparkline_in_unicode"
   },
   {
      "id": 716,
      "name": "Special characters",
      "link": "http://rosettacode.org/wiki/Special_characters"
   },
   {
      "id": 717,
      "name": "Special variables",
      "link": "http://rosettacode.org/wiki/Special_variables"
   },
   {
      "id": 718,
      "name": "Speech synthesis",
      "link": "http://rosettacode.org/wiki/Speech_synthesis"
   },
   {
      "id": 719,
      "name": "Spiral matrix",
      "link": "http://rosettacode.org/wiki/Spiral_matrix"
   },
   {
      "id": 720,
      "name": "Split a character string based on change of character",
      "link": "http://rosettacode.org/wiki/Split_a_character_string_based_on_change_of_character"
   },
   {
      "id": 721,
      "name": "SQL-based authentication",
      "link": "http://rosettacode.org/wiki/SQL-based_authentication"
   },
   {
      "id": 722,
      "name": "Stable marriage problem",
      "link": "http://rosettacode.org/wiki/Stable_marriage_problem"
   },
   {
      "id": 723,
      "name": "Stack",
      "link": "http://rosettacode.org/wiki/Stack"
   },
   {
      "id": 724,
      "name": "Stack traces",
      "link": "http://rosettacode.org/wiki/Stack_traces"
   },
   {
      "id": 725,
      "name": "Stair-climbing puzzle",
      "link": "http://rosettacode.org/wiki/Stair-climbing_puzzle"
   },
   {
      "id": 726,
      "name": "Start from a main routine",
      "link": "http://rosettacode.org/wiki/Start_from_a_main_routine"
   },
   {
      "id": 727,
      "name": "State name puzzle",
      "link": "http://rosettacode.org/wiki/State_name_puzzle"
   },
   {
      "id": 728,
      "name": "Statistics/Basic",
      "link": "http://rosettacode.org/wiki/Statistics/Basic"
   },
   {
      "id": 729,
      "name": "Statistics/Normal distribution",
      "link": "http://rosettacode.org/wiki/Statistics/Normal_distribution"
   },
   {
      "id": 730,
      "name": "Stem-and-leaf plot",
      "link": "http://rosettacode.org/wiki/Stem-and-leaf_plot"
   },
   {
      "id": 731,
      "name": "Stern-Brocot sequence",
      "link": "http://rosettacode.org/wiki/Stern-Brocot_sequence"
   },
   {
      "id": 732,
      "name": "Straddling checkerboard",
      "link": "http://rosettacode.org/wiki/Straddling_checkerboard"
   },
   {
      "id": 733,
      "name": "Stream Merge",
      "link": "http://rosettacode.org/wiki/Stream_Merge"
   },
   {
      "id": 734,
      "name": "String append",
      "link": "http://rosettacode.org/wiki/String_append"
   },
   {
      "id": 735,
      "name": "String case",
      "link": "http://rosettacode.org/wiki/String_case"
   },
   {
      "id": 736,
      "name": "String comparison",
      "link": "http://rosettacode.org/wiki/String_comparison"
   },
   {
      "id": 737,
      "name": "String concatenation",
      "link": "http://rosettacode.org/wiki/String_concatenation"
   },
   {
      "id": 738,
      "name": "String interpolation (included)",
      "link": "http://rosettacode.org/wiki/String_interpolation_(included)"
   },
   {
      "id": 739,
      "name": "String length",
      "link": "http://rosettacode.org/wiki/String_length"
   },
   {
      "id": 740,
      "name": "String matching",
      "link": "http://rosettacode.org/wiki/String_matching"
   },
   {
      "id": 741,
      "name": "String prepend",
      "link": "http://rosettacode.org/wiki/String_prepend"
   },
   {
      "id": 742,
      "name": "Strip a set of characters from a string",
      "link": "http://rosettacode.org/wiki/Strip_a_set_of_characters_from_a_string"
   },
   {
      "id": 743,
      "name": "Strip block comments",
      "link": "http://rosettacode.org/wiki/Strip_block_comments"
   },
   {
      "id": 744,
      "name": "Strip comments from a string",
      "link": "http://rosettacode.org/wiki/Strip_comments_from_a_string"
   },
   {
      "id": 745,
      "name": "Strip control codes and extended characters from a string",
      "link": "http://rosettacode.org/wiki/Strip_control_codes_and_extended_characters_from_a_string"
   },
   {
      "id": 746,
      "name": "Strip whitespace from a string/Top and tail",
      "link": "http://rosettacode.org/wiki/Strip_whitespace_from_a_string/Top_and_tail"
   },
   {
      "id": 747,
      "name": "Subleq",
      "link": "http://rosettacode.org/wiki/Subleq"
   },
   {
      "id": 748,
      "name": "Substring",
      "link": "http://rosettacode.org/wiki/Substring"
   },
   {
      "id": 749,
      "name": "Substring/Top and tail",
      "link": "http://rosettacode.org/wiki/Substring/Top_and_tail"
   },
   {
      "id": 750,
      "name": "Subtractive generator",
      "link": "http://rosettacode.org/wiki/Subtractive_generator"
   },
   {
      "id": 751,
      "name": "Sudoku",
      "link": "http://rosettacode.org/wiki/Sudoku"
   },
   {
      "id": 752,
      "name": "Sum and product of an array",
      "link": "http://rosettacode.org/wiki/Sum_and_product_of_an_array"
   },
   {
      "id": 753,
      "name": "Sum and Product Puzzle",
      "link": "http://rosettacode.org/wiki/Sum_and_Product_Puzzle"
   },
   {
      "id": 754,
      "name": "Sum digits of an integer",
      "link": "http://rosettacode.org/wiki/Sum_digits_of_an_integer"
   },
   {
      "id": 755,
      "name": "Sum multiples of 3 and 5",
      "link": "http://rosettacode.org/wiki/Sum_multiples_of_3_and_5"
   },
   {
      "id": 756,
      "name": "Sum of a series",
      "link": "http://rosettacode.org/wiki/Sum_of_a_series"
   },
   {
      "id": 757,
      "name": "Sum of squares",
      "link": "http://rosettacode.org/wiki/Sum_of_squares"
   },
   {
      "id": 758,
      "name": "Sum to 100",
      "link": "http://rosettacode.org/wiki/Sum_to_100"
   },
   {
      "id": 759,
      "name": "Superellipse",
      "link": "http://rosettacode.org/wiki/Superellipse"
   },
   {
      "id": 760,
      "name": "Sutherland-Hodgman polygon clipping",
      "link": "http://rosettacode.org/wiki/Sutherland-Hodgman_polygon_clipping"
   },
   {
      "id": 761,
      "name": "Symmetric difference",
      "link": "http://rosettacode.org/wiki/Symmetric_difference"
   },
   {
      "id": 762,
      "name": "Synchronous concurrency",
      "link": "http://rosettacode.org/wiki/Synchronous_concurrency"
   },
   {
      "id": 763,
      "name": "System time",
      "link": "http://rosettacode.org/wiki/System_time"
   },
   {
      "id": 764,
      "name": "Table creation/Postal addresses",
      "link": "http://rosettacode.org/wiki/Table_creation/Postal_addresses"
   },
   {
      "id": 765,
      "name": "Take notes on the command line",
      "link": "http://rosettacode.org/wiki/Take_notes_on_the_command_line"
   },
   {
      "id": 766,
      "name": "Taxicab numbers",
      "link": "http://rosettacode.org/wiki/Taxicab_numbers"
   },
   {
      "id": 767,
      "name": "Temperature conversion",
      "link": "http://rosettacode.org/wiki/Temperature_conversion"
   },
   {
      "id": 768,
      "name": "Terminal control/Clear the screen",
      "link": "http://rosettacode.org/wiki/Terminal_control/Clear_the_screen"
   },
   {
      "id": 769,
      "name": "Terminal control/Coloured text",
      "link": "http://rosettacode.org/wiki/Terminal_control/Coloured_text"
   },
   {
      "id": 770,
      "name": "Terminal control/Cursor movement",
      "link": "http://rosettacode.org/wiki/Terminal_control/Cursor_movement"
   },
   {
      "id": 771,
      "name": "Terminal control/Cursor positioning",
      "link": "http://rosettacode.org/wiki/Terminal_control/Cursor_positioning"
   },
   {
      "id": 772,
      "name": "Terminal control/Dimensions",
      "link": "http://rosettacode.org/wiki/Terminal_control/Dimensions"
   },
   {
      "id": 773,
      "name": "Terminal control/Display an extended character",
      "link": "http://rosettacode.org/wiki/Terminal_control/Display_an_extended_character"
   },
   {
      "id": 774,
      "name": "Terminal control/Hiding the cursor",
      "link": "http://rosettacode.org/wiki/Terminal_control/Hiding_the_cursor"
   },
   {
      "id": 775,
      "name": "Terminal control/Inverse video",
      "link": "http://rosettacode.org/wiki/Terminal_control/Inverse_video"
   },
   {
      "id": 776,
      "name": "Terminal control/Positional read",
      "link": "http://rosettacode.org/wiki/Terminal_control/Positional_read"
   },
   {
      "id": 777,
      "name": "Terminal control/Preserve screen",
      "link": "http://rosettacode.org/wiki/Terminal_control/Preserve_screen"
   },
   {
      "id": 778,
      "name": "Terminal control/Ringing the terminal bell",
      "link": "http://rosettacode.org/wiki/Terminal_control/Ringing_the_terminal_bell"
   },
   {
      "id": 779,
      "name": "Terminal control/Unicode output",
      "link": "http://rosettacode.org/wiki/Terminal_control/Unicode_output"
   },
   {
      "id": 780,
      "name": "Ternary logic",
      "link": "http://rosettacode.org/wiki/Ternary_logic"
   },
   {
      "id": 781,
      "name": "Test a function",
      "link": "http://rosettacode.org/wiki/Test_a_function"
   },
   {
      "id": 782,
      "name": "Test integerness",
      "link": "http://rosettacode.org/wiki/Test_integerness"
   },
   {
      "id": 783,
      "name": "Text processing/1",
      "link": "http://rosettacode.org/wiki/Text_processing/1"
   },
   {
      "id": 784,
      "name": "Text processing/2",
      "link": "http://rosettacode.org/wiki/Text_processing/2"
   },
   {
      "id": 785,
      "name": "Text processing/Max licenses in use",
      "link": "http://rosettacode.org/wiki/Text_processing/Max_licenses_in_use"
   },
   {
      "id": 786,
      "name": "Textonyms",
      "link": "http://rosettacode.org/wiki/Textonyms"
   },
   {
      "id": 787,
      "name": "The ISAAC Cipher",
      "link": "http://rosettacode.org/wiki/The_ISAAC_Cipher"
   },
   {
      "id": 788,
      "name": "The Twelve Days of Christmas",
      "link": "http://rosettacode.org/wiki/The_Twelve_Days_of_Christmas"
   },
   {
      "id": 789,
      "name": "Thiele's interpolation formula",
      "link": "http://rosettacode.org/wiki/Thiele%27s_interpolation_formula"
   },
   {
      "id": 790,
      "name": "Thue-Morse",
      "link": "http://rosettacode.org/wiki/Thue-Morse"
   },
   {
      "id": 791,
      "name": "Tic-tac-toe",
      "link": "http://rosettacode.org/wiki/Tic-tac-toe"
   },
   {
      "id": 792,
      "name": "Time a function",
      "link": "http://rosettacode.org/wiki/Time_a_function"
   },
   {
      "id": 793,
      "name": "Tokenize a string",
      "link": "http://rosettacode.org/wiki/Tokenize_a_string"
   },
   {
      "id": 794,
      "name": "Tokenize a string with escaping",
      "link": "http://rosettacode.org/wiki/Tokenize_a_string_with_escaping"
   },
   {
      "id": 795,
      "name": "Top rank per group",
      "link": "http://rosettacode.org/wiki/Top_rank_per_group"
   },
   {
      "id": 796,
      "name": "Topic variable",
      "link": "http://rosettacode.org/wiki/Topic_variable"
   },
   {
      "id": 797,
      "name": "Topological sort",
      "link": "http://rosettacode.org/wiki/Topological_sort"
   },
   {
      "id": 798,
      "name": "Topswops",
      "link": "http://rosettacode.org/wiki/Topswops"
   },
   {
      "id": 799,
      "name": "Total circles area",
      "link": "http://rosettacode.org/wiki/Total_circles_area"
   },
   {
      "id": 800,
      "name": "Towers of Hanoi",
      "link": "http://rosettacode.org/wiki/Towers_of_Hanoi"
   },
   {
      "id": 801,
      "name": "Trabb Pardo–Knuth algorithm",
      "link": "http://rosettacode.org/wiki/Trabb_Pardo%E2%80%93Knuth_algorithm"
   },
   {
      "id": 802,
      "name": "Tree traversal",
      "link": "http://rosettacode.org/wiki/Tree_traversal"
   },
   {
      "id": 803,
      "name": "Trigonometric functions",
      "link": "http://rosettacode.org/wiki/Trigonometric_functions"
   },
   {
      "id": 804,
      "name": "Truncatable primes",
      "link": "http://rosettacode.org/wiki/Truncatable_primes"
   },
   {
      "id": 805,
      "name": "Truncate a file",
      "link": "http://rosettacode.org/wiki/Truncate_a_file"
   },
   {
      "id": 806,
      "name": "Truth table",
      "link": "http://rosettacode.org/wiki/Truth_table"
   },
   {
      "id": 807,
      "name": "Twelve statements",
      "link": "http://rosettacode.org/wiki/Twelve_statements"
   },
   {
      "id": 808,
      "name": "Ulam spiral (for primes)",
      "link": "http://rosettacode.org/wiki/Ulam_spiral_(for_primes)"
   },
   {
      "id": 809,
      "name": "Unbias a random generator",
      "link": "http://rosettacode.org/wiki/Unbias_a_random_generator"
   },
   {
      "id": 810,
      "name": "Undefined values",
      "link": "http://rosettacode.org/wiki/Undefined_values"
   },
   {
      "id": 811,
      "name": "Unicode strings",
      "link": "http://rosettacode.org/wiki/Unicode_strings"
   },
   {
      "id": 812,
      "name": "Unicode variable names",
      "link": "http://rosettacode.org/wiki/Unicode_variable_names"
   },
   {
      "id": 813,
      "name": "Universal Turing machine",
      "link": "http://rosettacode.org/wiki/Universal_Turing_machine"
   },
   {
      "id": 814,
      "name": "Unix/ls",
      "link": "http://rosettacode.org/wiki/Unix/ls"
   },
   {
      "id": 815,
      "name": "Update a configuration file",
      "link": "http://rosettacode.org/wiki/Update_a_configuration_file"
   },
   {
      "id": 816,
      "name": "URL decoding",
      "link": "http://rosettacode.org/wiki/URL_decoding"
   },
   {
      "id": 817,
      "name": "URL encoding",
      "link": "http://rosettacode.org/wiki/URL_encoding"
   },
   {
      "id": 818,
      "name": "URL parser",
      "link": "http://rosettacode.org/wiki/URL_parser"
   },
   {
      "id": 819,
      "name": "Use another language to call a function",
      "link": "http://rosettacode.org/wiki/Use_another_language_to_call_a_function"
   },
   {
      "id": 820,
      "name": "User input/Graphical",
      "link": "http://rosettacode.org/wiki/User_input/Graphical"
   },
   {
      "id": 821,
      "name": "User input/Text",
      "link": "http://rosettacode.org/wiki/User_input/Text"
   },
   {
      "id": 822,
      "name": "UTF-8 encode and decode",
      "link": "http://rosettacode.org/wiki/UTF-8_encode_and_decode"
   },
   {
      "id": 823,
      "name": "Validate International Securities Identification Number",
      "link": "http://rosettacode.org/wiki/Validate_International_Securities_Identification_Number"
   },
   {
      "id": 824,
      "name": "Vampire number",
      "link": "http://rosettacode.org/wiki/Vampire_number"
   },
   {
      "id": 825,
      "name": "Van der Corput sequence",
      "link": "http://rosettacode.org/wiki/Van_der_Corput_sequence"
   },
   {
      "id": 826,
      "name": "Variable size/Get",
      "link": "http://rosettacode.org/wiki/Variable_size/Get"
   },
   {
      "id": 827,
      "name": "Variable size/Set",
      "link": "http://rosettacode.org/wiki/Variable_size/Set"
   },
   {
      "id": 828,
      "name": "Variable-length quantity",
      "link": "http://rosettacode.org/wiki/Variable-length_quantity"
   },
   {
      "id": 829,
      "name": "Variables",
      "link": "http://rosettacode.org/wiki/Variables"
   },
   {
      "id": 830,
      "name": "Variadic function",
      "link": "http://rosettacode.org/wiki/Variadic_function"
   },
   {
      "id": 831,
      "name": "Vector products",
      "link": "http://rosettacode.org/wiki/Vector_products"
   },
   {
      "id": 832,
      "name": "Verify distribution uniformity/Chi-squared test",
      "link": "http://rosettacode.org/wiki/Verify_distribution_uniformity/Chi-squared_test"
   },
   {
      "id": 833,
      "name": "Verify distribution uniformity/Naive",
      "link": "http://rosettacode.org/wiki/Verify_distribution_uniformity/Naive"
   },
   {
      "id": 834,
      "name": "Video display modes",
      "link": "http://rosettacode.org/wiki/Video_display_modes"
   },
   {
      "id": 835,
      "name": "Vigenère cipher",
      "link": "http://rosettacode.org/wiki/Vigen%C3%A8re_cipher"
   },
   {
      "id": 836,
      "name": "Vigenère cipher/Cryptanalysis",
      "link": "http://rosettacode.org/wiki/Vigen%C3%A8re_cipher/Cryptanalysis"
   },
   {
      "id": 837,
      "name": "Visualize a tree",
      "link": "http://rosettacode.org/wiki/Visualize_a_tree"
   },
   {
      "id": 838,
      "name": "Vogel's approximation method",
      "link": "http://rosettacode.org/wiki/Vogel%27s_approximation_method"
   },
   {
      "id": 839,
      "name": "Voronoi diagram",
      "link": "http://rosettacode.org/wiki/Voronoi_diagram"
   },
   {
      "id": 840,
      "name": "Walk a directory/Non-recursively",
      "link": "http://rosettacode.org/wiki/Walk_a_directory/Non-recursively"
   },
   {
      "id": 841,
      "name": "Walk a directory/Recursively",
      "link": "http://rosettacode.org/wiki/Walk_a_directory/Recursively"
   },
   {
      "id": 842,
      "name": "Water collected between towers",
      "link": "http://rosettacode.org/wiki/Water_collected_between_towers"
   },
   {
      "id": 843,
      "name": "Web scraping",
      "link": "http://rosettacode.org/wiki/Web_scraping"
   },
   {
      "id": 844,
      "name": "Window creation",
      "link": "http://rosettacode.org/wiki/Window_creation"
   },
   {
      "id": 845,
      "name": "Window creation/X11",
      "link": "http://rosettacode.org/wiki/Window_creation/X11"
   },
   {
      "id": 846,
      "name": "Window management",
      "link": "http://rosettacode.org/wiki/Window_management"
   },
   {
      "id": 847,
      "name": "Wireworld",
      "link": "http://rosettacode.org/wiki/Wireworld"
   },
   {
      "id": 848,
      "name": "Word search",
      "link": "http://rosettacode.org/wiki/Word_search"
   },
   {
      "id": 849,
      "name": "Word wrap",
      "link": "http://rosettacode.org/wiki/Word_wrap"
   },
   {
      "id": 850,
      "name": "World Cup group stage",
      "link": "http://rosettacode.org/wiki/World_Cup_group_stage"
   },
   {
      "id": 851,
      "name": "Write entire file",
      "link": "http://rosettacode.org/wiki/Write_entire_file"
   },
   {
      "id": 852,
      "name": "Write float arrays to a text file",
      "link": "http://rosettacode.org/wiki/Write_float_arrays_to_a_text_file"
   },
   {
      "id": 853,
      "name": "Write language name in 3D ASCII",
      "link": "http://rosettacode.org/wiki/Write_language_name_in_3D_ASCII"
   },
   {
      "id": 854,
      "name": "Write to Windows event log",
      "link": "http://rosettacode.org/wiki/Write_to_Windows_event_log"
   },
   {
      "id": 855,
      "name": "Xiaolin Wu's line algorithm",
      "link": "http://rosettacode.org/wiki/Xiaolin_Wu%27s_line_algorithm"
   },
   {
      "id": 856,
      "name": "XML/DOM serialization",
      "link": "http://rosettacode.org/wiki/XML/DOM_serialization"
   },
   {
      "id": 857,
      "name": "XML/Input",
      "link": "http://rosettacode.org/wiki/XML/Input"
   },
   {
      "id": 858,
      "name": "XML/Output",
      "link": "http://rosettacode.org/wiki/XML/Output"
   },
   {
      "id": 859,
      "name": "XML/XPath",
      "link": "http://rosettacode.org/wiki/XML/XPath"
   },
   {
      "id": 860,
      "name": "Y combinator",
      "link": "http://rosettacode.org/wiki/Y_combinator"
   },
   {
      "id": 861,
      "name": "Yahoo! search interface",
      "link": "http://rosettacode.org/wiki/Yahoo!_search_interface"
   },
   {
      "id": 862,
      "name": "Yin and yang",
      "link": "http://rosettacode.org/wiki/Yin_and_yang"
   },
   {
      "id": 863,
      "name": "Zebra puzzle",
      "link": "http://rosettacode.org/wiki/Zebra_puzzle"
   },
   {
      "id": 864,
      "name": "Zeckendorf arithmetic",
      "link": "http://rosettacode.org/wiki/Zeckendorf_arithmetic"
   },
   {
      "id": 865,
      "name": "Zeckendorf number representation",
      "link": "http://rosettacode.org/wiki/Zeckendorf_number_representation"
   },
   {
      "id": 866,
      "name": "Zero to the zero power",
      "link": "http://rosettacode.org/wiki/Zero_to_the_zero_power"
   },
   {
      "id": 867,
      "name": "Zhang-Suen thinning algorithm",
      "link": "http://rosettacode.org/wiki/Zhang-Suen_thinning_algorithm"
   },
   {
      "id": 868,
      "name": "Zig-zag matrix",
      "link": "http://rosettacode.org/wiki/Zig-zag_matrix"
   }
    ];
return {exercises};
}
}
