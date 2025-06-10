using System;

class Program
{
    public static int MinMeetingsToSingleColor(int[] hedgehogs, int targetColor)
    {
        int total = hedgehogs[0] + hedgehogs[1] + hedgehogs[2];

        if (hedgehogs[targetColor] == total)
            return 0;

        int nonZeroColors = 0;
        foreach (var count in hedgehogs)
            if (count > 0) nonZeroColors++;
        if (nonZeroColors == 1)
            return -1;

        int colorSum = hedgehogs[0] * 0 + hedgehogs[1] * 1 + hedgehogs[2] * 2;
        if (colorSum % 3 != (targetColor * total) % 3)
            return -1;

        int minMeetings = (total - hedgehogs[targetColor] + 1) / 2;
        return minMeetings;
    }

    static void Main(string[] args)
    {
        int[] hedgehogs = new int[] { 2, 1, 1 };
        int targetColor = 0;
        Console.WriteLine(MinMeetingsToSingleColor(hedgehogs, targetColor));
    }
}
