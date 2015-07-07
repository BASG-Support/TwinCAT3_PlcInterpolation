# TwinCAT3_PlcInterpolation

This program was initially made to run with the FaulHaber DC servo motors w/ their CANOpen drives. 
To run this program, you may need to disable the FaulHaber axis first, or to create a new axis and link it to the PLC.

The MAIN pou executes the overall sequence. The first time bStart trigger will enable all the motor. Then bStart will reset, and the next time it is triggered, as long as the position and velocity values are valid, the interpolation motion will execute. bStart will again reset when done, and can be repeated.
