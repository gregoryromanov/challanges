class Array
  def my_reduce(*args, &b)
    acc, m = args

    if block_given?
      each(&->(n) { acc = b.call(acc, n) })
    else
      each(&->(n) { acc = m(acc, n) })
    end

    acc
  end
end

pp [1, 2, 3].my_reduce(0) { |acc, n| acc + n }
pp [1, 2, 3].my_reduce 0, &->(acc, n) { acc + n }

pp [1, 2, 3].reduce(0) { |acc, n| acc + n }
pp [1, 2, 3].reduce 0, &->(acc, n) { acc + n }
