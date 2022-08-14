The idea with Controllers is to have everything prepared for the end entity (usualy page) in one place.

If you have a controller with implementation that varries depending of the context where it is placed, this also gives you opportunity to inject context of the controller to specific implementation, and then implementation should know how to "act".