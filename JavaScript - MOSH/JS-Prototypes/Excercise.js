function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function() { duration = value; }
    });

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; }
    });

    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
    });

    Object.defineProperty(this, 'running', {
        get: function() { return running; }
    });
} 
Stopwatch.prototype.start = function() {
    if(this.running)
      throw new Error('Stopwatch has already started.');

      running = true;

      startTime = new Date();
};

Stopwatch.prototype.stop = function() {
    if(!this.running) 
      throw new Error('Stopwatch is not started');

    running = false;
    
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
};

Stopwatch.prototype.reset = function() {  
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;     
};