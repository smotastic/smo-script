cd $SMO_HOME
devBase=$(git rev-parse $1)

TortoiseGitProc /path:$SMO_HOME /command:showcompare /revision1:$devBase /revision2:$2 &