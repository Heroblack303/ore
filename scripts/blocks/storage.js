//name of object, type of your content, file-name
CoreBlock, "mini-core", {
	targetable: false,
	buildCostMultiplier: 3,
//is it possible to build a core regardless of another core, true or false.
canPlaceOn(tile, team, rotation){
        return true;
    },
//is it possible to break the core
    canBreak(tile){
    	return true;
    },
//adding build time for the core
    setStats(){
this.super$setStats();
if(this.canBeBuilt() && this.requirements.length > 0){
this.stats.add(Stat.buildTime, this.buildCost / 60, StatUnit.seconds);
        }
    }
}